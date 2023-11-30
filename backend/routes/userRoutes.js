// import express from "express"; //   "type": "module", in package.json
const express = require("express");
const router = express.Router();

const { authUser } = require("../controllers/userController");

router.post("/auth", authUser);

module.exports = router;
// export default router; "type": "module", in package.json
