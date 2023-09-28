const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
require('./Db/db');
const Blog = require('./Routers/blogs');
const expError = require('./Exceptions/exp-error');
const catchAsyncError = require('./Exceptions/async-error')

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(Blog);

app.all("*", catchAsyncError(async (req, res, next) => {
    next(new expError("Page Not Found", 404));
}));

app.use((err, req, res, next) => {
    const { statusCode = 400, message = "Something Went Wrong" } = err;
    res.status(statusCode).json(message);
});

app.listen(7974, function () {
    console.log("Server is up on port 7974");
});