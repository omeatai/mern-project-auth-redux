const express = require("express");
const router = express.Router();

const {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} = require("../controllers/userController");

// @desc Register user
// route POST /api/users
// @access Public
router.post("/", registerUser);

// @desc Auth/Login user/set token
// route POST /api/users/auth
// @access Public
router.post("/auth", authUser);

// @desc Logout user
// route POST /api/users/logout
// @access Public
router.post("/logout", logoutUser);

// @desc Get User Profile && Update User Profile
// route GET /api/users/profile &&  PUT /api/users/profile
// @access Private
router.route("/profile").get(getUserProfile).put(updateUserProfile);

module.exports = router;
