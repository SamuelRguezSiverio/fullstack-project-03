const router = require("express").Router();


const { getAllClients, getClientsByAccountManager } = require("../controllers/clientController");
const {checkAuthAccountManager} = require("../utils/index")

router.get('/', getAllClients);
router.get('/accountManager/', checkAuthAccountManager, getClientsByAccountManager)

module.exports = router;
