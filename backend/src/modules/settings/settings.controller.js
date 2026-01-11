import Settings from "./settings.model.js";

export const updateSettings = async (req, res) => {
  try {
    const settings = await Settings.findOneAndUpdate(
      { key: req.params.key },
      { ...req.body, updatedBy: req.user.id },
      { new: true, upsert: true }
    );
    res.json(settings);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getSettings = async (req, res) => {
  try {
    const settings = await Settings.find();
    res.json(settings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
