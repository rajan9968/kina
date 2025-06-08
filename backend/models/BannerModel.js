const mongoose = require('mongoose');
const bannerSchema = new mongoose.Schema({
    tags: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        required: true,
    },
    banner_url: {
        type: String,
        required: false,
    },
    status: {
        type: Number,
        default: 1,
    },
}, { timestamps: true });

const BannerModel = mongoose.model('Banner', bannerSchema);
module.exports = BannerModel;