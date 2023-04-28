const AccountManager = require('../api/models/accountManager.Model')
const Brand = require('../api/models/brand.Models')
const Phones = require('../api/models/phones.Models')


function addRelationsToModels() {
    try {
        Brand.hasMany(Phones)
        Phones.belongsTo(Brand)
        console.log("Relations succesfully added")
    }
    catch (error) {
        throw error
    }
}

module.exports = addRelationsToModels