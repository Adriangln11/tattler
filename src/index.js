const express = require('express')
const { swagger: v1Docs } = require('./docs/swagger')
const path = require('path')
const router = require('./routes/router.js')
require('./db/db.js') 

const app = express()
app.set('port', process.env.PORT || 3000)

//middleware
app.use(require('morgan')('dev'))
app.use( express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '/public')))

//routes
app.get('/api', (req, res) => {
    return res.json({greeting: 'Hello API!'})
})
app.use('/api', router)


app.listen(app.get('port'), () => {
    console.log(`🚀 Server listening on ${app.get('port')}`)
    v1Docs(app, app.get('port'))
})