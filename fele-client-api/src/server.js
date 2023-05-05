const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const { server } = require('./configs/fele-config')
//const swaggerUi = require('swagger-ui-express')
//const {swaggerDocument} = require('./openAPI/swagger')

const app = express()

app.use(cors())
app.use(cookieParser())
app.use(bodyParser.json())
//Adding Routes
require('./routes/routes')(app)

//openAPI Documentation
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))


app.get('/', (req, res) => {
    console.log("Base path called")
    res.send("Hello, Im base path of api !!!!!")
})

const PORT = server.port
app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
});