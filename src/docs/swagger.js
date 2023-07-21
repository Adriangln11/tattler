const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const { newLocalDoc, scheemaDoc, editLocalDoc, deleteLocalDoc } = require('./routesDocs.js')

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Tattler API ',
            version: '1.0.0',
            description:
                'Tattler API, used to obtain and manipulate information about all restaurants registered with tattler.',
            contact: { name: 'Adriangln11' },
        },
        servers: [
            {
                url: 'http://localhost:3000/',
            },
        ],
        components: {
            schemas: {
                Local: scheemaDoc,
            },
        },
    },
    apis: ['./src/routes/*.js', './src/models/*.js'],
}

const swaggerSpec = swaggerJsDoc(options)
swaggerSpec.paths = { ...swaggerSpec.paths, ...newLocalDoc, ...editLocalDoc, ...deleteLocalDoc }

const swaggerDocs = (app, port) => {
    app.use('/api/docs/v1', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
    app.get('/api/docs/v1.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        res.send(swaggerSpec)
    })
    console.log('📚 Documentation is available at /api/docs/v1')
}

module.exports = { swaggerDocs }
