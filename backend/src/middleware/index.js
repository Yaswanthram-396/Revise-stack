import jwt from "jsonwebtoken";

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

export const isUserValid = (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth) {
    return res.status(401).json({
      message: "Token Required",
    });
  }
  try {
    const token = auth.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    console.log(decoded);
    next();
  } catch (e) {
    return res.status(401).json({
      message: "Invalid Token",
      e,
    });
  }
};
