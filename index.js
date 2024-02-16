const express = require('express');
const mongoose = require('mongoose');
const app = express();
const productRoute = require('./routes/product.route')
const Product = require("./models/product.model")
app.use(express.json());


app.use("/api/products",productRoute)


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

mongoose.connect('mongodb+srv://ketan:vib5l6FFchCJbRVM@cluster0.zbeb4q8.mongodb.net/Node-API?retryWrites=true&w=majority')
    .then(() => console.log('Connected!'));