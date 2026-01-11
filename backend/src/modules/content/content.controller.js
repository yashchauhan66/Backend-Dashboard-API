import Content from "./content.model.js";

export const createContent = async (req, res) => {
  try {
    const content = await Content.create(req.body);
    res.status(201).json(content);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getContent = async (req, res) => {
  try {
    const content = await Content.find().sort({ date: -1 });
    res.json(content);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
