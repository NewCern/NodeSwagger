const express = require('express')
const swaggerUI = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerJSDocs = YAML.load('./api.yaml')
const app = express()

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJSDocs))

app.listen(4000, () => console.log("Listening on Port 4000"))