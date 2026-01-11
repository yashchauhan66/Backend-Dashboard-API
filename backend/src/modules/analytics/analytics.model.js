import mongoose from "mongoose";

const analyticsSchema = new mongoose.Schema({
  title: String,
  value: String,
  date: { type: Date, default: Date.now }
});

export default mongoose.model("Analytics", analyticsSchema);
