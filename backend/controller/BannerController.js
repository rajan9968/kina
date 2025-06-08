const express = require('express');
const BannerModel = require('../models/BannerModel');


const addBanner = async (req, res) => {
    try {
        const auth = req.headers['authorization'];
        if (!auth) {
            return res.status(403).json({
                message: "Unauthorized, JWT token is invalid"
            });
        }
        const image = req.file ? req.file.path : null;
        const tags = req.body ? req.body.tags : null;
        const banner_url = req.body ? req.body.banner_url : null;

        const banner = new BannerModel({
            tags,
            image,
            banner_url,
            status: 1
        });
        const savedBanner = await banner.save();
        return res.status(201).json({ success: true, message: "Banner added successfully", banner: savedBanner });
    }
    catch (error) {
        console.error("Banner error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const getAllBanner = async (req, res) => {
    try {
        const auth = req.headers['authorization'];
        // if (!auth) {
        //     return res.status(403).json({ message: "Unauthorized, JWT token is invalid" });
        // }
        const allBanner = await BannerModel.find({});
        if (!allBanner) {
            return res.status(404).json({ message: "No banner found" });
        }
        return res.status(200).json({ message: "Banner fetched successfully", banner: allBanner });
    }
    catch (error) {
        console.error("Banner error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const getBannerbyId = async (req, res) => {
    try {
        const auth = req.headers['authorization'];
        if (!auth) {
            return res.status(403).json({ message: "Unauthorized, JWT token is invalid" });
        }
        const bannerId = req.body.id;
        const banner = await BannerModel.findById(bannerId);
        if (!banner) {
            return res.status(404).json({ message: "Banner not found" });
        }
        return res.status(200).json({ message: "Banner fetched successfully", banner });
    }
    catch (error) {
        console.error("Banner error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

// updateBanner

const updateBanner = async (req, res) => {
    try {
        const auth = req.headers['authorization'];
        if (!auth) {
            return res.status(403).json({ message: "Unauthorized, JWT token is invalid" });
        }
        const bannerId = req.body.id;
        const { tags, banner_url, status } = req.body;
        const image = req.file
            ? req.file.path
            : req.body.existingImage
                ? req.body.existingImage
                : null;
        const updatedBanner = await BannerModel.findByIdAndUpdate(
            bannerId,
            {
                tags,
                banner_url,
                image,
                status
            }
        );
        if (!updatedBanner) {
            return res.status(404).json({ message: "Banner not found" });
        }
        return res.status(200).json({ message: "Banner updated successfully", banner: updatedBanner });
    }
    catch (error) {
        console.error("Banner error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

deleteBanner = async (req, res) => {
    try {
        const auth = req.headers['authorization'];
        if (!auth) {
            return res.status(403).json({ message: "Unauthorized, JWT token is invalid" });
        }
        const bannerId = req.body.id;
        const deletedBanner = await BannerModel.findByIdAndDelete(bannerId);
        if (!deletedBanner) {
            return res.status(404).json({ message: "Banner not found" });
        }
        return res.status(200).json({ message: "Banner deleted successfully", banner: deletedBanner });
    }
    catch (error) {
        console.error("Banner error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = {
    addBanner,
    getAllBanner,
    getBannerbyId,
    updateBanner,
    deleteBanner
};
