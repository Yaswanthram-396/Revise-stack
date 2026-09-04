import jwt from "jsonwebtoken";
import Users from "../models/user.js";

export const validate = (fields) => {
  return (req, res, next) => {
    for (const field of fields) {
      if (req.body[field] === undefined) {
        return res.status(400).json({
          status: 400,
          message: `${field} is required`,
        });
      }
    }
    next();
  };
};

export const validateId = (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    return res.json({
      status: 400,
      message: "Id is required",
    });
  }
  next();
};

export const isUserValid = async (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth) {
    return res.status(401).json({
      message: "Token Required",
    });
  }
  try {
    const token = auth.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const data = await Users.findById(decoded.id);
    if (!data) {
      res.status(404).json({
        message: "User Not Found",
      });
    }
    req.user = decoded;

    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ message: "Token expired. Please log in again." });
    }
    return res.status(401).json({ message: "Invalid token." });
  }
};
