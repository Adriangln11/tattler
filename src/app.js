const express = require('express')
const passport = require('passport')
const flash = require('connect-flash')
const path = require('path')
const router = require('./routes/router.js')
require('./db/db.js')
require('./auth/auth.js')

const app = express()
app.set('port', process.env.PORT || 3000)

//*config
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//*middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(require('morgan')('dev'))
app.use(
  require('express-session')({
    secret: 'qwerty',
    resave: true,
    saveUninitialized: true,
  })
)
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

app.use((req, res, next) => {
  app.locals.signUpMessage = req.flash('signUpMessage')
  app.locals.logInMessage = req.flash('logInMessage')
  app.locals.user = req.user
  next()
})
//*routes

app.use(router)

module.exports = app
