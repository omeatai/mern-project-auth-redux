// const dotenv = require("dotenv");
// dotenv.config();
require("dotenv").config();

const path = require('path');
const express = require("express");
const port = process.env.PORT || 8000;

const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

connectDB();
const app = express();

//CORS configuration
const corsOptions = {
  origin: 'https://mern-auth-project.ifeanyiomeata.com', // allowed origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the allowed HTTP methods
  credentials: true, // Allow sending cookies
  optionsSuccessStatus: 200, // Some legacy browsers choke on 204
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

app.use(function (req, res, next) {
  req.headers.origin = req.headers.origin || req.headers.host;
  if (req.headers.origin == "mern-auth-project.ifeanyiomeata.com") {
    next();
  } else {
    res.json({ error: `Prohibited Access! Only https://example1.com/ url is allowed access not ${req.headers.origin}! ` })
  }

});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRoutes);

// app.get("/", (req, res) => res.send("Server is ready"));

if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, '/frontend/dist')));
  app.use(express.static('public', { type: 'application/javascript' }));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

app.use(notFound);
app.use(errorHandler);

const server = app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);

server.on("error", (error) => {
  console.error(`Error starting server: ${error.message}`);
});

