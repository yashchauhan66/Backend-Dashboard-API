import Sales from "./sales.model.js";

export const createSale = async (req, res) => {
  try {
    const sale = await Sales.create(req.body);
    res.status(201).json(sale);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getSales = async (req, res) => {
  try {
    const sales = await Sales.find().sort({ date: -1 });
    res.json(sales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
