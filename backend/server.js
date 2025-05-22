const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./connection/db');
const userRoutes = require('./routes/userRoutes');
const AdminRoutes = require('./routes/AdminRoutes');
const ProductRoutes = require('./routes/ProductRoutes');
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/user', userRoutes);
app.use('/admin', AdminRoutes);
app.use('/products', ProductRoutes)
app.use('/uploads', express.static('uploads'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


connectDB();

