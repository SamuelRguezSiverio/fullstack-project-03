'use strict'
const router = require('express').Router()

const { signup, login,getAllAccountManagers } = require('../controllers/authController')

router.post('/signup', signup)
router.post('/login', login)
router.get('/', getAllAccountManagers)

module.exports = router
