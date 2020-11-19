  
const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  invoiceNumber: {
    type: String,
    trim: true,
    required: [true, 'Enter invoice number']
  },
  customerName: {
    type: String,
    trim: true,
    required: [true, 'Enter name']
  },
  itemName: {
    type: String,
    trim: true,
    required: [true, 'Enter item name']
  },
  quantity: {
    type: Number,
    trim: true,
    required: [true, 'Enter quantity']
  },
  rate: {
    type: Number,
    required: [true, 'Please enter rate of item']
  },
  amount: {
    type: Number,
    required: [true, 'Please enter total amount']
  },
  tax: {
    type: Number,
    required: [true, 'Please enter tax %']
  },
  total: {
    type: Number,
    required: [true, 'Please enter grand total. Please add a positive or negative number']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: Boolean,
    required: [true, 'Please enter payment status']
  }
});

module.exports = mongoose.model('Transaction', TransactionSchema);