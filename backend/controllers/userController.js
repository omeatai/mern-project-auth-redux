const asyncHandler = require("express-async-handler");

// @desc Auth user/set token
// route POST /api/users/auth
// @access Public
const authUser = asyncHandler(async (req, res) => {
  res.status(401);
  throw new Error("Testing Error handling....");
  //   res.status(200).json({ message: "Auth User" });
});

module.exports = { authUser };
