const Client = require("../models/clients.Model");

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

module.exports = { getAllClients };
