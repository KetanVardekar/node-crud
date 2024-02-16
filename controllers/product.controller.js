const Product = require("../models/product.model")
const getProducts = async(req,res)=>{
    try {
        const allProducts = await Product.find({});
        res.status(200).json(allProducts)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.find({ _id: id });
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message })
    }
};

const updateProduct = async (req, res) => {
    console.log(req.body);
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            return res.status(404).json({ message: "Product not Found" })
        }
        const updateProduct = await Product.findById(id);
        res.status(200).json(updateProduct)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message })
    }
};

const deleteProduct =  async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id, req.body);
        if (!product) {
            return res.status(404).json({ message: "Product not Found" })
        }
        res.status(200).json({ message: "product deleted Succesfully" })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getProducts,getProductById,createProduct,updateProduct,deleteProduct
}