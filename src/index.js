const express = require('express')
const { swagger: v1Docs } = require('./docs/swagger')
const path = require('path')
const router = require('./routes/router.js')
require('./db/db.js')

const app = express()
app.set('port', process.env.PORT || 3000)

//middleware
app.use(require('morgan')('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//routes
app.get('/', (req, res) => {
  return res.render('index')
})
app.use('/api', router)

app.listen(app.get('port'), () => {
  console.log(`🚀 Server listening on ${app.get('port')}`)
  v1Docs(app, app.get('port'))

  app.use((req, res) => {
    return res.render('404')
  })
})
