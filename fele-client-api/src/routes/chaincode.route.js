const express = require('express')
const router = express.Router()
const { invokeChaincodeHandlerGet, invokeChaincodeHandlerPost, invokeChaincodeHandlerPut, invokeChaincodeHandlerDelete } = require('../controllers/chaincode.controller')

//Chaincode Routes
router.get('/invoke-chaincode', invokeChaincodeHandlerGet)
router.post('/invoke-chaincode', invokeChaincodeHandlerPost)
router.put('/invoke-chaincode', invokeChaincodeHandlerPut)
router.delete('/invoke-chaincode', invokeChaincodeHandlerDelete)

module.exports = router
