import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        minlength: [2, "Name must contains at least 2 characters"],
    },
    email: {                        
        type: String,
        required: [true, "Email is required"],
        // match: [/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Email is invalid"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        // match: [/^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/, "Password is invalid"]
    },
    token: {
        type: String,
        default: null
    },

})

const User = models?.User ?? model("User", userSchema);

export default User;