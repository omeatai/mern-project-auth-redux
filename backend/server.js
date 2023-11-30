// import express from "express"; //   "type": "module", in package.json
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const userRoutes = require("./routes/userRoutes");

const port = process.env.PORT || 8000;
const app = express();

app.use("/api/users", userRoutes);

app.get("/", (req, res) => res.send("Server is ready"));

const server = app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);

server.on("error", (error) => {
  console.error(`Error starting server: ${error.message}`);
});
