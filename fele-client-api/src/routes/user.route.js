const express = require('express')
const router = express.Router()

const {
    updateUserHandler,
    deleteUserHandler
} = require('../controllers/user.controller')

router.post('/update', updateUserHandler)
router.post('/delete', deleteUserHandler)

module.exports = router