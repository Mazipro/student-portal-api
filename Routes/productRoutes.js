const express = require('express');
const router = express.Router();

// Import the controller function here:
const { getAllProducts } = require('../controller/productController');

// Your route line:
router.get('/getall', getAllProducts);

module.exports = router;