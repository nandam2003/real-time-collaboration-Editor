const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide a Name"],
        },
        email: {
            type: String,
            required: [true, "Please provide an email"],
            unique: [true, "Email already exist"],
        },
        password: {
            type: String,
            required: [true, "Please provide a password"],
            unique: false,
        },
    }
)

module.exports = mongoose.model("Users", UserSchema)