const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    reqired: true,
    unique:true,
  },
  price: {
    type: String,
    reqired: [true, 'Price must be provided'],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    // reqired:false,
    default: 5,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: 'String',
    enum: {
      values: ['apple', 'Samsung'],
      message: `{VALUE} is not supported`,
    },
  },
});
module.exports=mongoose.model("Product",productSchema);
