const router = require('express').Router();
const upload = require('../middleware/uploads');
const { addProduct, getAllproduct, getProductById, updateProduct } = require('../controller/ProductController');

// Use multer middleware before your controller
router.post('/add-product', upload.single('image'), addProduct);
router.post('/get-product', getAllproduct);
router.put('/get-product', getProductById);
router.put('/update-product', upload.single('image'), updateProduct);
// router.put('/update-product', updateProduct);

module.exports = router;
