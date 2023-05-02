const router = require("express").Router();

const { getAllPhones, getPhonesByBrand } = require("../controllers/phoneController");

router.get("/", getAllPhones);
router.get("/brand/:id", getPhonesByBrand)

module.exports = router;