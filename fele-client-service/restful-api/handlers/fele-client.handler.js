const { createNetwork, deleteNetwork } = require('../../client-api/scripts/network')
const { createChannel } = require('../../client-api/scripts/channel')

const createNetworkHandler = async(req, res) => {
    const networkName = req.query.networkName
    await createNetwork(JSON.stringify(req.body), networkName)
    res.status(201).send({
        message: "Network Created Successfully", 
        networkConfig: {...req.body}
    })
}
 

const createChannelHandler = async (req, res) => {
    const {networkName, channelConfig} = req.body

    const info = await createChannel(networkName, channelConfig)
    if(info.success) {
        res.status(201).send({
            ...info

        })
    } else {
        res.status(500).send({
            ...info
        })
    }
}

const deleteChannelHandler = (req, res) => {
    res.send({msg: "Channel deletion functionality Not Yet Added"})
}

const deleteNetworkHandler = async (req, res) => {
    let deleted = await deleteNetwork(req.query.networkName)
    if(deleted) res.send({"status": "Newtwork Deleted Successfully!"})
    else res.send({"status": "Error deleting network"})
}

const addOrganizationHandler = (req, res) => {
    //TODO
    res.send("Add organization Response")
}


const removeOrganizationHandler = (req, res) => {
    //TODO
    res.send("Delete Organization response")
}

const chainCodeDeployHandler = (req, res) => {
    // TODO
    res.send("Chain code deploy response")
}

module.exports = {
    createNetworkHandler,
    createChannelHandler,
    deleteChannelHandler,
    deleteNetworkHandler,
    addOrganizationHandler,
    removeOrganizationHandler,
    chainCodeDeployHandler
}