const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    expenseList: [{
      expensesName: { type: String, required: true },
      expenseDate: { type: Date, required: true },
      expensePrice: { type: Number, required: true }
    }],
  },
  { timestamps: true }
);

mongoose.pluralize(null);
module.exports = mongoose.model("UserExpenses", UserSchema);
