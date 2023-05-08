const AccountManager = require('../api/models/accountManager.Model')
const Brand = require('../api/models/brand.Models')
const Phones = require('../api/models/phones.Models')
const Client = require('../api/models/clients.Model')


function addRelationsToModels() {
    try {
        Brand.hasMany(Phones)
        Phones.belongsTo(Brand)
        AccountManager.hasMany(Client)
        Client.belongsTo(AccountManager)
        console.log("Relations succesfully added")
    }
    catch (error) {
        throw error
    }
}

module.exports = addRelationsToModels