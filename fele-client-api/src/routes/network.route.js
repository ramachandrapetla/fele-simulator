const express = require('express')
const router = express.Router()

const { createNetworkHandler, deleteNetworkHandler} = require('../controllers/network.controller')

router.post('/create', createNetworkHandler)
router.delete('/delete', deleteNetworkHandler)

module.exports = router