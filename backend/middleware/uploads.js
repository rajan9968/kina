// middleware/uploads.js
const multer = require('multer');
const path = require('path');

// Storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const fileName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${ext}`;
        cb(null, fileName);
    }
});

// File filter (optional): to allow only image files
// const fileFilter = (req, file, cb) => {
//     const allowedTypes = /jpeg|jpg|png|webp/;
//     const ext = path.extname(file.originalname).toLowerCase();
//     if (allowedTypes.test(ext)) {
//         cb(null, true);
//     } else {
//         cb(new Error('Only images are allowed'), false);
//     }
// };

const upload = multer({ storage: storage });

// ✅ Export the configured multer instance
module.exports = upload;
