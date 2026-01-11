import mongoose from "mongoose";

const settingsSchema = new mongoose.Schema({
  key: String,
  value: String,
  description: String,
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model("Setting", settingsSchema);
