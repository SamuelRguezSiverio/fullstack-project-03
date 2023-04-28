const router = require('express').Router();

const getAllPhones = require('../controllers/phoneController');

router.get('/', getAllPhones)

module.exports = router;    