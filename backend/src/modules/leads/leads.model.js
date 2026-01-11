import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: String,
  value: String,
  date: { type: Date, default: Date.now }
});

export default mongoose.model("Lead", schema);
