const Phone = require('../models/phones.Models');
const Brand = require('../models/brand.Models');

async function getAllPhones(req, res) {
    try {
        const phone = await Phone.findAll({
            where: req.query
        })
        return !phone
            ? res.status(404).send("Not found")
            : res.status(200).json(phone)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getOnePhone(req, res) {
	try {
		const phone = await Phone.findByPk(req.params.id)
		if (phone) {
			return res.status(200).json(phone)
		} else {
			return res.status(404).send('Phone not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}


module.exports = {
    getAllPhones,
    getOnePhone
}