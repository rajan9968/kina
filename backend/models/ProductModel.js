const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true,
    },
    description: {
        type: String,
        // required: true,
    },
    mrp_price: {
        type: Number,
        // required: true,
    },
    sale_price: {
        type: Number,
        // required: true,
    },
    quantity: {
        type: Number,
        // required: true,
    },
    no_of_page: {
        type: Number,
        // required: true,
    },
    no_of_lesson: {
        type: Number,
        // required: true,
    },
    no_of_topic: {
        type: Number,
        // required: true,
    },
    publisher: {
        type: String,
        // required: true,
    },
    product_type: {
        type: String,
        // required: true,
    },
    image: {
        type: String,
        //required: true,
    },
    category: {
        type: String,
        // required: true,
    },
    tags: {
        type: [String],
        // required: true,
    },
    status: {
        type: String,
        // required: true,
    },
});

module.exports = mongoose.model("products", productSchema);