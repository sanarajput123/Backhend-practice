const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors")
app.use(express.json())
app.use(cors())

let connectToDatabase = require("./connectDB")
let users = require("./src/routes/user");
let books = require("./src/routes/book")

app.use("/users", users);
app.use("/books", books);

mongoose.set("strictQuery", false);
connectToDatabase();

app.get('/', (req, res) => {
    res.send("Hello World....");
});

console.log('Backend is running on port 8080.')
app.listen(8080);