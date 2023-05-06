const router = require("express").Router();


const { getAllClients } = require("../controllers/clientController");

router.get('/', getAllClients);

module.exports = router;
