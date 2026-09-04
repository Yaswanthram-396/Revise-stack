import bycrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import Books from "../models/books.js";
import Recipe from "../models/recipe.js";
import { data } from "../data/quotes.js";
import Feedback from "../models/feedback.js";
import Users from "../models/user.js";

import { uploadFiletoImagekit } from "../../services/imagestorage.service.js";
import Diary from "../models/diary.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const finduser = await Users.findOne({ email: email });
    if (finduser) {
      return res.status(409).json({
        status: 409,
        message: "User already exists",
      });
    }
    const hashed = await bycrypt.hash(password, 10);

    const createuser = await Users.create({
      name,
      email,
      password: hashed,
    });
    const token = jwt.sign(
      {
        id: createuser._id,
        email: createuser.email,
        name: createuser.name,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN || "1d",
      },
    );

    return res.status(201).json({
      status: 201,
      message: "Account created successfully",
      data: {
        user: {
          id: createuser._id,
          email: createuser.email,
          name: createuser.name,
        },
        accesstoken: token,
      },
    });
  } catch (e) {
    return res.status(400).json({
      status: 400,
      message: "error",
      error: e.message,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const finduser = await Users.findOne({ email }).select("+password");

    if (!finduser) {
      return res.status(404).json({
        status: 404,
        message: "No user found",
      });
    }
    const checkpassword = await bycrypt.compare(password, finduser.password);
    if (!checkpassword) {
      return res.status(401).json({
        status: 401,
        message: "Invalid email or password",
      });
    }
    const token = jwt.sign(
      {
        id: finduser._id,
        email: finduser.email,
        name: finduser.name,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN || "1d",
      },
    );

    return res.status(200).json({
      status: 200,
      message: "Login successful",
      data: {
        user: {
          id: finduser._id,
          email: finduser.email,
          name: finduser.name,
        },
        accesstoken: token,
      },
    });
  } catch (e) {
    return res.status(400).json({
      status: 400,
      message: "error",
      error: e.message,
    });
  }
};

export const getQuotes = (req, res) => {
  const number = Math.floor(Math.random() * data.length);
  res.json({
    status: 200,
    message: "success",
    data: data[number],
  });
};

export const getQuoteById = (req, res) => {
  const number = req.params.id;
  res.json({
    status: 200,
    message: "success",
    data: data.filter((a) => Number(a.id) == number),
  });
};
export const deleteQuoteById = (req, res) => {
  const number = req.params.id;
  const index = data.findIndex((a) => Number(a.id) == number);
  if (index !== -1) {
    const deleted = data.splice(index, 1);
    res.json({
      status: 200,
      message: "success",
      data: deleted[0],
    });
  } else {
    res.json({
      status: 404,
      message: "Quote not found",
    });
  }
};

export const getRecipies = async (req, res) => {
  const { search, cuisine, time, limit = 10, rating } = req.query;
  const filter = {};
  if (cuisine) filter.cuisine = cuisine;
  if (time) filter.cookTime = { $lte: Number(time) };
  if (rating) filter.rating = { $gte: Number(rating) };
  if (search) filter.name = { $regex: search, $options: "i" };

  try {
    const data = await Recipe.find({ ...filter })
      .sort({ rating: -1 })
      .limit(Number(limit));
    res.json({
      status: 200,
      message: "success",
      data: data,
    });
  } catch {
    console.log("error");
    res.json({
      status: 400,
      message: "error",
    });
  }
};

export const getBooks = async (req, res) => {
  try {
    const data = await Books.find({}).limit(10);
    res.json({
      status: 200,
      message: "success",
      data: data,
    });
  } catch {
    res.json({
      status: 400,
      message: "error",
    });
  }
};

export const getBookByid = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.json({
      status: 400,
      message: "error",
    });
    return;
  }
  try {
    const data = await Books.findById(id);
    if (!data) {
      res.json({
        status: 200,
        message: "success",
        data: [],
      });
      return;
    }
    res.json({
      status: 200,
      message: "success",
      data: data,
    });
  } catch {
    res.json({
      status: 400,
      message: "error",
    });
  }
};

export const createBook = async (req, res) => {
  const { title, author, status } = req.body;

  try {
    const data = await Books.create({
      title: title,
      author: author,
      status: status,
    });

    res.json({
      status: 200,
      message: "success",
      data: data,
    });
  } catch {
    res.json({
      status: 500,
      message: "error",
    });
  }
};

export const updateBookByid = async (req, res) => {
  const id = req.params.id;
  const { title, author, status } = req.body;
  const update = {};
  if (title) update.title = title;
  if (author) update.author = author;
  if (status) update.status = status;

  try {
    const data = await Books.findByIdAndUpdate(
      id,
      { ...update },
      { new: true, runValidators: true },
    );
    res.json({
      status: 200,
      message: "success",
      data: data,
    });
  } catch (e) {
    res.json({
      status: 400,
      message: e._message,
      data: e.errors,
    });
  }
};

export const updateStatus = async (req, res) => {
  const id = req.params.id;
  const status = req.body;
  try {
    const isbookpresent = await Books.findById(id);
    if (!isbookpresent) {
      res.status(404).json({
        status: 404,
        message: "No data found",
        data: id,
      });
    }
    const data = await Books.findByIdAndUpdate(id, status);

    res.status(200).json({
      status: 200,
      message: "success",
      data: data,
    });
  } catch (e) {
    res.status(400).json({
      status: 400,
      message: e._message,
      data: e,
    });
  }
};

export const deleteBookByid = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Books.findByIdAndDelete(id);
    if (!data) {
      res.json({
        status: 404,
        message: "No data found",
        data: id,
      });
      return;
    }
    res.json({
      status: 200,
      message: "success",
      data: data,
    });
  } catch (e) {
    res.json({
      status: 400,
      message: e._message,
      data: e.errors,
    });
  }
};

export const addFeedback = async (req, res) => {
  const { name, email, rating, message } = req.body;

  try {
    const finduser = await Feedback.find({ email: email });
    if (finduser.length > 0) {
      return res.json({
        status: 400,
        message: "Feedback already Exists",
      });
    }
    const data = await Feedback.create({
      name,
      email,
      rating,
      message,
    });

    return res.json({
      status: 200,
      message: "success",
      data: data,
    });
  } catch (e) {
    return res.json({
      status: 500,
      message: "error",
      data: e,
    });
  }
};

export const uploadFile = async (req, res) => {
  const data = await uploadFiletoImagekit(req.file.buffer.toString("base64"));
  console.log(data);
};

export const getDiaries = async (req, res) => {
  const user = req.user;
  try {
    const data = await Diary.find({ userId: user.id }).limit(10);
    return res.status(200).json({
      status: 200,
      message: "Success",
      data: data,
    });
  } catch {
    return res.status(500).json({
      status: 500,
      message: "Internal server Error",
    });
  }
};
export const getDiaryById = async (req, res) => {
  const user = req.user;
  const { id } = req.params;
  console.log("user", user);
  try {
    const data = await Diary.findById(id);
    if (!data) {
      return res.status(404).json({
        status: 401,
        message: "No post Found",
      });
    }
    if (data.userId.toString() !== user.id.toString()) {
      return res.status(401).json({
        status: 401,
        message: "You didn't have access to this post",
      });
    }

    return res.status(200).json({
      status: 200,
      message: "Success",
      data: data,
    });
  } catch (e) {
    return res.status(500).json({
      status: 500,
      message: "Internal server Error",
      e,
    });
  }
};

export const createDiary = async (req, res) => {
  const userData = req.body;
  const user = req.user;
  try {
    const data = await Diary.create({ ...userData, userId: user.id });
    if (data) {
      return res.status(200).json({
        status: 200,
        message: "success",
        data: data,
      });
    }
  } catch {
    return res.status(500).json({
      status: 500,
      message: "Internal server Error",
    });
  }
};
