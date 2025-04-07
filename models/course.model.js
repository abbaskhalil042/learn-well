import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  creatorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AdminSchema",
  },
});

const CourseSchema = mongoose.model("CourseSchema", courseSchema);

export default CourseSchema;
