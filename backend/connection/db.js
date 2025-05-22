const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        const dbURI = process.env.MONGODB_URI;

        const options = {};

        await mongoose.connect(dbURI, options);

        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error(error);
    }
};
module.exports = connectDB;
