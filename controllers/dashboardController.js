import Record from "../models/Record.js";

export const getSummary = async (req, res) => {
  const records = await Record.find({createdBy: req.user.id});
  let income = 0;
  let expense = 0;

  records.forEach((r) => {
    if (r.type === "income") income += r.amount;
    else expense += r.amount;
  });

  res.json({ totalIncome: income, totalExpense: expense, netBalance: income - expense});
};

export const getCategorySummary = async (req, res) => {
  const data = await Record.aggregate([
    { $match: { createdBy: req.user.id } },
    {$group: {_id: "$category",total: { $sum: "$amount" }}}
  ]);
  res.json(data);
};

export const getMonthlyTrends = async (req, res) => {
  const data = await Record.aggregate([
    { $match: { createdBy: req.user.id } },
    {$group: { _id: { $month: "$date" },total: { $sum: "$amount" }}}
  ]);
  res.json(data);
};