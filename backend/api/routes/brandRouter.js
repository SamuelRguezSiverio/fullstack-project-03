const router = require('express').Router();

const getAllBrands = require('../controllers/brandController');

router.get('/', getAllBrands)

module.exports = router;