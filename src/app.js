import express from 'express'
import passport from 'passport'
import flash from 'connect-flash'
import session from 'express-session'
import morgan from 'morgan'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import router from './routes/router.js'
import './db/db.js'
import './auth/auth.js'

const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
app.set('port', process.env.PORT || 3000)

//*config
app.set('view engine', 'ejs')
app.set('views', join(__dirname, 'views'))

//*middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('dev'))
app.use(
  session({
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

export default app
