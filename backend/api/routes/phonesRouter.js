const router = require("express").Router();

const { getAllPhones, getOnePhone } = require("../controllers/phoneController");

router.get("/", getAllPhones);
//router.get('/:id', getOnePhone)

module.exports = router;
