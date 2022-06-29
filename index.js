const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
mongoose
    .connect(
        `mongodb+srv://sni424:abcd@cluster0.hg0w0.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => console.log("hello"))
    .catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
