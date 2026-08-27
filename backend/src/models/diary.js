import mongoose from "mongoose";

const diarySchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    description: String,
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true },
);

const Diary = mongoose.model("Diary", diarySchema);
export default Diary;
