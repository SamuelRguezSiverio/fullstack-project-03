const Brand = require('../models/brand.Models');

async function getAllBrands(req, res) {
    try {
        const brand = await Brand.findAll({
            where: req.query
        })
        return !brand
            ? res.status(404).send("Not found")
            : res.status(200).json(brand)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = getAllBrands