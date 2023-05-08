const Client = require("../models/clients.Model");

async function getAllClients(req, res) {
  try {
    const clients = await Client.findAll({
      where: req.query
  })
    return !clients
      ? res.status(404).send("No clients found")
      : res.status(200).json(clients);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function getClientsByAccountManager(req, res) {
  try {
      const accountManager = res.locals.accountManager
      const clients = await accountManager.getClients();
      return res.status(200).json(clients);
  } catch (error) {
      return res.status(500).send(error.message);
  }
}


module.exports = { getAllClients, getClientsByAccountManager };
