import Record from "../models/Record.js";

export const createRecord = async (req, res) => {
  try {
    const { amount, type, category, userId } = req.body;
    if (!amount || !type || !category) {
      return res.status(400).json({
        message: "Amount, type and category are required"});
    }

    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Only admin can create records"});
    }

    const record = await Record.create({
      amount,
      type,
      category,
      createdBy: userId || req.user.id,
    });

    res.status(201).json(record);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getRecords = async (req, res) => {
  try {
    const { type, category, startDate, endDate, page = 1 } = req.query;
    const limit = 5;
    const skip = (page - 1) * limit;
    let filter = {};
    if (req.user.role !== "admin") {
         filter.createdBy = req.user.id;
    }
    if (type) filter.type = type;
    if (category) filter.category = category;
    if (startDate && endDate) {
      filter.date = { $gte: new Date(startDate),$lte: new Date(endDate)};}

    const records = await Record.find(filter).skip(skip).limit(limit);
    const total = await Record.countDocuments(filter);

    res.json({
      total,
      page: Number(page),
      pages: Math.ceil(total / limit),
      data: records });
      
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateRecord = async (req, res) => {
  const record = await Record.findByIdAndUpdate( req.params.id, req.body,{ new: true } );
  res.json(record);
};

export const deleteRecord = async (req, res) => {
  await Record.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};