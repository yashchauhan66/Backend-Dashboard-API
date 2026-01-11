import Analytics from "./analytics.model.js";

export const createAnalytics = async (req, res) => {
  try {
    const data = await Analytics.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAnalytics = async (req, res) => {
  try {
    const data = await Analytics.find().sort({ date: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
