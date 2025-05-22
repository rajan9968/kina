const router = require('express').Router();
const upload = require('../middleware/uploads');
const { addProduct, getAllproduct, getProductById } = require('../controller/ProductController');

// Use multer middleware before your controller
router.post('/add-product', upload.single('image'), addProduct);
router.post('/get-product', getAllproduct);
router.put('/get-product', getProductById);

module.exports = router;
