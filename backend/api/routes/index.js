const router = require('express').Router()

const authRouter = require('./authRouter.js')
const brandRouter = require('./brandRouter.js')
const phonesRouter = require('./phonesRouter.js')
const clientRouter = require('./clientRouter.js')

router.use('/auth', authRouter)
router.use('/brands', brandRouter)
router.use('/phones', phonesRouter) 
router.use('/clients', clientRouter)


module.exports = router
