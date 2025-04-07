import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique:true
  },
  password: {
    type: String,
    require: true,
  },
  purchasedCourse:{
   type:mongoose.Schema.Types.ObjectId,
   ref:"CourseSchema"
  }
});

const UserSchema=mongoose.model("UserSchema",userSchema)

export default UserSchema