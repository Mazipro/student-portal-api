const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);
const productRoutes = require('./Routes/productRoutes.js');
const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./Routes/studentRoutes.js');

const app = express();
const port = 3000; // You can change this to any port you prefer
app.use(express.json());
app.use('/', studentRoutes);
app.use('/products', productRoutes);

// Replace YOUR_NEW_PASSWORD with the password set in MongoDB Atlas
const compass_string = "mongodb+srv://aanieffiok_db_user:MMMazipro1234@cluster0.longkgl.mongodb.net/test?retryWrites=true&w=majority";


mongoose
  .connect(compass_string, {
    family: 4
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch(error => console.error("MongoDB connection error:", error));

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});