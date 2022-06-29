const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50,
    },
    email: {
        type: String,
        trim: true, //빈공간을 없애줌
        unique: 1, //중복이메일 불가
    },
    password: {
        type: String,
        maxlength: 5,
    },
    lastname: {
        type: String,
        maxlength: 50,
    },
    //롤은 권한 관리자등
    role: {
        type: Number,
        default: 0,
    },
    image: String,
    token: {
        type: String,
    },
    tokenExp: {
        type: Number,
    },
});

const User = mongoose.model("user", userSchema);

module.exports = { User };
