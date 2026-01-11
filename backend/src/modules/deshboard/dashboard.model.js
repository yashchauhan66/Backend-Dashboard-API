import mongoose from "mongoose";

const dashboardSchema = new mongoose.Schema({
  title: String,
  value: String
});

export default mongoose.model("Dashboard", dashboardSchema);
