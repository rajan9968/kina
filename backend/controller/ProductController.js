const express = require('express');
const ProductModel = require('../models/ProductModel');


const addProduct = async (req, res) => {
    try {

        const auth = req.headers['authorization'];
        if (!auth) {
            return res.status(403).json({ message: "Unauthorized, JWT token is invalid" });
        }

        const { name, description, mrp_price, sale_price, quantity, no_of_page, no_of_lesson, no_of_topic, publisher, product_type, category, tags } = req.body;

        const image = req.file ? req.file.path : null;
        console.log("Image path:", image);
        const product = new ProductModel({
            name,
            description,
            mrp_price,
            sale_price,
            quantity,
            no_of_page,
            no_of_lesson,
            no_of_topic,
            publisher,
            product_type,
            image,
            category,
            tags,
            status: 1
        });

        const savedProduct = await product.save();

        return res.status(201).json({ success: true, message: "Product added successfully", product: savedProduct });


    } catch (error) {
        console.error("Product error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const getAllproduct = async (req, res) => {
    try {
        const auth = req.headers['authorization'];
        if (!auth) {
            return res.status(403).json({ message: "Unauthorized, JWT token is invalid" });
        }

        const allProduct = await ProductModel.find({});
        if (!allProduct) {
            return res.status(404).json({ message: "No product found" });
        }

        return res.status(200).json({ message: "Product fetched successfully", product: allProduct });

    } catch (error) {
        console.error("Register error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const getProductById = async (req, res) => {
    try {
        const auth = req.headers['authorization'];
        if (!auth) {
            return res.status(403).json({ message: "Unauthorized, JWT token is invalid" });
        }
        const id = req.body.id;
        const product = await ProductModel.findById(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        return res.status(200).json({ message: "Product fetched successfully", success: true, product: product });

    } catch (error) {
        console.error("Register error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const updateProduct = async (req, res) => {
    try {
        const auth = req.headers['authorization'];
        if (!auth) {
            return res.status(403).json({ message: "Unauthorized, JWT token is invalid" });
        }
        const { id, name, description, mrp_price, sale_price, quantity, no_of_page, no_of_lesson, no_of_topic, publisher, product_type, category, tags } = req.body;
        const image = req.file ? req.file.path : null;
        const product = await ProductModel.findById(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        product.name = name;
        product.description = description;
        product.mrp_price = mrp_price;
        product.sale_price = sale_price;
        product.quantity = quantity;
        product.no_of_page = no_of_page;
        product.no_of_lesson = no_of_lesson;
        product.no_of_topic = no_of_topic;
        product.publisher = publisher;
        product.product_type = product_type;
        product.category = category;
        product.tags = tags;
        if (image) {
            product.image = image;
        }
        const updatedProduct = await product.save();
        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        return res.status(200).json({ message: "Product updated successfully", success: true, product: updatedProduct });
    }
    catch (error) {
        console.error("Register error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }

}


module.exports = {
    addProduct,
    getAllproduct,
    getProductById,
    updateProduct
}