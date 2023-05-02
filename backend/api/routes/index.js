const router = require('express').Router()

const authRouter = require('./authRouter.js')
const brandRouter = require('./brandRouter.js')
const phonesRouter = require('./phonesRouter.js')

router.use('/auth', authRouter)
router.use('/brands', brandRouter)
router.use('/phones', phonesRouter) 


module.exports = router
