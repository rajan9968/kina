const router = require('express').Router();
const { addBanner, getAllBanner, getBannerbyId, updateBanner } = require('../controller/BannerController');
const upload = require('../middleware/uploads');

router.post('/add-banner', upload.single('image'), addBanner);
router.get('/get-all-banner', getAllBanner);
router.put('/get-banner', getBannerbyId);
router.put('/update-banner', upload.single('image'), updateBanner);
router.delete('/delete-banner', deleteBanner);


module.exports = router;