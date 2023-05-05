const express = require('express')
const router = express.Router()

const {createChannelHandler, deleteChannelHandler, addFeleUsersToChannel} = require('../controllers/channel.controller')
const {validateCreateChannelPayload} = require('../validators/channelValidator')

//Channel Routes
router.post('/create', validateCreateChannelPayload, createChannelHandler)
router.delete('/delete', deleteChannelHandler)
router.post('/add-fele-users', addFeleUsersToChannel)

module.exports = router