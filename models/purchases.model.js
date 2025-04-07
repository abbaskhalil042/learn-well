import mongoose from "mongoose";

const purchasesSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserSchema",
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CourseSchema",
  },
});

const PurchasesSchema = mongoose.model("PurchasesSchema", purchasesSchema);

export default PurchasesSchema;
