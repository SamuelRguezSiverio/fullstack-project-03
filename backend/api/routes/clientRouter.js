const router = require("express").Router();


const { getAllClients, getClientsByAccountManager } = require("../controllers/clientController");

router.get('/', getAllClients);
router.get('/accountManager/:id', getClientsByAccountManager)

module.exports = router;
