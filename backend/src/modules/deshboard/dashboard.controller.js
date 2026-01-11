import Dashboard from "./dashboard.model.js";

export const createData = async (req, res) => {
  const data = await Dashboard.create(req.body);
  res.json(data);
};

export const getData = async (req, res) => {
  const data = await Dashboard.find();
  res.json(data);
};
