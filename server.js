const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

process.on("uncaughtException", (err) => {
  console.log("Uncaught exception! shutting down");
  console.log(err.name, err.message);
  process.exit(1);
});

const app = require("./app");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://test:test123@cluster0.wrltunx.mongodb.net/", {})
  .then(() => {
    console.log("mongoose conneted");
  });

const server = app.listen(3000, () => {
  console.log("app running on port 3000");
});

process.on("unhandledRejection", (err) => {
  console.log("Unhandled rejection! shutting down");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
