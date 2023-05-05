const channelRoutes = require('./channel.route')
const networkRoutes = require('./network.route')
const userRoutes = require('./user.route')
const caRoutes = require('./ca.route')
const chaincodeRoutes = require('./chaincode.route')
const orgRoutes = require('./organization.route')

module.exports = (app) => {
    app.use('/api/fele/channel', channelRoutes)
    app.use('/api/fele/network', networkRoutes)
    app.use('/api/fele/user', userRoutes)
    app.use('/api/fele/ca/user', caRoutes)
    app.use('/api/fele/chaincode', chaincodeRoutes)
    app.use('/api/fele/organization', orgRoutes)
}

