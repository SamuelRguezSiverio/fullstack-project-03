const router = require('express').Router()

const authRouter = require('./authRouter.js')
const brandRouter = require('./brandRouter.js')
const phonesRouter = require('./phonesRouter.js')
const clientRouter = require('./clientRouter.js')
const {checkAuthAccountManager} = require("../utils/index")

router.use('/auth', authRouter)
router.use('/brands', checkAuthAccountManager, brandRouter)
router.use('/phones',checkAuthAccountManager, phonesRouter) 
router.use('/clients', checkAuthAccountManager, clientRouter)


module.exports = router
