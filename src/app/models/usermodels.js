import { data } from "autoprefixer";
import mongoose, { Schema } from "mongoose";
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "please provide a username"],
    unique: true,
  },
  email: {
    type: string,
    required: [true, "please provide an email"],
    unique: true,
  },
  password: {
    type: string,
    required: [true, "please provide a password"],
  },
  isVerfied: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: string,
  forgotPasswordTokenExpiry: date,
  verifyToken: string,
  verifyTokenExpiry: date,
});
const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;
