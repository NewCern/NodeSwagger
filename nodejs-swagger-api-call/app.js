const express = require('express')
const app = express()
const routes = require('./routes')
const db = require('./db')
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')


app.use(express.json())
app.use(express.urlencoded({extended: true}))

//swagger configuration
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Node JS Swagger API Call',
            version: '1.0.0'
        },
        servers:[
            {
                url: 'http://localhost:3000/'
            }
        ]
    },
    apis: ['./routes/index.js']
}

const swaggerSpec = swaggerJSDoc(options)
app.use('/swaggerapi', swaggerUI.serve, swaggerUI.setup(swaggerSpec))

/**
 * @swagger
 * /customersales:
 *  get:
 *      summary: This api is used to check if get method is working or not
 *      description: This api is used to check if get method is working or not
 *      responses:
 *          200:
 *              description: To test Get method 
 * 
 */

// app.get('/', (req, res) => {
//     res.send('Home Page')
// })

// app.get('/customersales', async(req, res) => {
//     await db.query("SELECT * FROM SalesLT.Customer", (err, result) => {
//         if(err) return console.log(err)
//         return res.status(200).json({result})
//     })
// } )

app.use('/', routes)

module.exports = app  



