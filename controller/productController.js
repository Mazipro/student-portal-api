const productModel = require('../model/productModel.js');

/**
 * create: upload product
 * get all : get all products
 * get one : get one product
 * update : update product(stock)
 * delete : delete product
 */

//create /upload 
const uploadProduct = async (req, res) => {
  try {
    const getStudentId = await studentModel.findById(req.params.studentId);
    const { name, price, description, category, stock, quantity, image } = req.body;
    if (!getStudentId) {
      return res.status(404).json({ message: 'Student not found' });
    }
    const product = await productModel.create({
      name,price,description,category,stock,quantity,image})
      await getStudentId.products.push(product._id);
      await getStudentId.save();
    res.status(201).json({ message: 'Product uploaded successfully', product: product });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

//get All
const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).json({ message: 'All products fetched successfully', products: products });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  uploadProduct,
  getAllProducts
}; 