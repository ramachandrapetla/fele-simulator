const express = require('express')
const router = express.Router()
const {registerFeleUser, enrollFeleUser, getAllUserCredentialsForUser} = require('../controllers/ca.controller')
//CA Routes
router.post('/register', registerFeleUser)
router.post('/enroll', enrollFeleUser) //Creates a certificate for fele-user
router.get('/get-credentials', getAllUserCredentialsForUser)
module.exports = router