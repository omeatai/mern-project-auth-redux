const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  // Get the token
  // const token = req.header("Authorization");
  let token;
  token = req.cookies.jwt;

  // Check if token exists
  if (!token) {
    // return res.status(401).json({ message: "No token, authorization denied" });
    res.status(401);
    throw new Error("Not authorized, no token");
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Add the decoded user object to the request
    // req.user = decoded.user;
    req.user = await User.findById(decoded.userId).select("-password");

    // Call the next middleware
    next();
  } catch (err) {
    // res.status(401).json({ message: "Token is not valid" });
    res.status(401);
    throw new Error("Not authorized, invalid token");
  }
});

module.exports = { protect };
