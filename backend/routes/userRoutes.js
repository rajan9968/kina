const router = require('express').Router();
const { registerUser, LoginUser } = require('../controller/userController');

router.post('/register', registerUser);
router.post('/login', LoginUser);

module.exports = router;