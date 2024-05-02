const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = 4500;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/sample", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));

// Define the product schema
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number
});

// Create the Product model
const Product = mongoose.model("Product", productSchema);

// CRUD Operations
// Create a new product
app.post("/api/products", async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({ success: true, product });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Failed to create product" });
    }
});

// Read all products
app.get("/api/products", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({ success: true, products });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Failed to fetch products" });
    }
});

// Read a single product by ID
app.get("/api/products/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.status(200).json({ success: true, product });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Failed to fetch product" });
    }
});

// Update a product by ID
app.put("/api/products/:id", async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.status(200).json({ success: true, product });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Failed to update product" });
    }
});

// Delete a product by ID
app.delete("/api/products/:id", async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Failed to delete product" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
