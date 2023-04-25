const AccountManager = require('../models/accountManager.Model')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function login(req, res) {
  try {
    const user = await AccountManager.findOne({
      where: {
        email: req.body.email
      }
    })

    if (!user) return res.status(401).send('Email or password incorrect')

    bcrypt.compare(req.body.password, user.password, (err, result) => {
      if (err) return res.status(500).send(err)
      if (!result) return res.status(401).send('Email or password incorrect')

      const payload = { email: user.email }
      const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '1h' })
      return res.status(200).json({ token: token })
    })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function signup(req, res) {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 10)

    const user = await AccountManager.create(req.body, {
      fields: ['name', 'surname', 'dni', 'email', 'password', 'city'] //Definimos los campos que pueden rellenar.
    })

    const payload = { email: user.email }
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '1h' })

    return res.status(200).json({ token: token })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  login,
  signup
}
