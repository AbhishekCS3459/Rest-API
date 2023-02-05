const Product = require('../models/m1')
const getallProducts = async (req, res) => {
    const { company, name, featured, sort } = req.query
    const queryObject = {}
    if (company) {
      queryObject.company = { $regex: company, $options: 'a' }
    }
  
    if (name) {
      queryObject.name = { $regex: name, $options: 'i' }
    }
    if (featured) {
      queryObject.featured = featured
    }
    let apiData = Product.find(queryObject)
    if (sort) {
      let sortFix = sort.replace(',', ' ')
        apiData=apiData.sort(sortFix);
    }
    const mydata = await apiData;
  
    res.status(200).json({ mydata })
}
const getallProductsTesting = async (req, res) => {
  const { company, name, featured, sort } = req.query
  const queryObject = {}
  if (company) {
    queryObject.company = { $regex: company, $options: 'a' }
  }

  if (name) {
    queryObject.name = { $regex: name, $options: 'i' }
  }
  if (featured) {
    queryObject.featured = featured
  }
  let apiData = Product.find(queryObject)
  if (sort) {
    let sortFix = sort.replace(',', ' ')
      apiData=apiData.sort(sortFix);
  }
  const mydata = await apiData;

  res.status(200).json({ mydata })
}
module.exports = { getallProducts, getallProductsTesting }
