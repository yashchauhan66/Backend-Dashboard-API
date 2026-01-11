import mongoose from "mongoose";

const salesSchema = new mongoose.Schema({
  productName: String,
  amount: Number,
  customer: String,
  date: { type: Date, default: Date.now }
});

export default mongoose.model("Sale", salesSchema);
