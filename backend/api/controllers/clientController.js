const Client = require("../models/clients.Model");
const AccountManager = require('../models/accountManager.Model')

async function getAllClients(req, res) {
  try {
    console.log(req.headers);
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
      const accountManager = await AccountManager.findByPk(req.params.id);
      if (!accountManager) {
          return res.status(404).send("Account Manager not found");
      }
      const client = await accountManager.getClients();
      return res.status(200).json(client);
  } catch (error) {
      return res.status(500).send(error.message);
  }
}


module.exports = { getAllClients, getClientsByAccountManager };
