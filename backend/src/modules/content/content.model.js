import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
  title: String,
  content: String,
  category: String,
  date: { type: Date, default: Date.now }
});

export default mongoose.model("Content", contentSchema);
