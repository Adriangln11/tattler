import { Router } from 'express'
import passport from 'passport'

import {
  createLocal,
  editLocal,
  deleteLocalbyName,
  getAll,
  filter,
  sort,
  deleteLocalById,
} from '../controllers/controllers.js'

const router = Router()
router
  //*GET
  .get(
    '/',
    (req, res, next) => {
      if (req.isAuthenticated()) {
        return next()
      }
      return res.render('signup', { title: 'Tattler | SignUp' })
    },
    (req, res) => {
      return res.render('index', { title: 'Tattler | Menú' })
    }
  )
  .get('/api', (req, res) => {
    return res.json({ greeting: 'Hello API!' })
  })
  .get('/signup', (req, res) => {
    return res.render('signup', { title: 'Tattler | SignUp' })
  })
  .get('/login', (req, res) => {
    return res.render('login', { title: 'Tattler | Login' })
  })
  .get('/logout', (req, res, next) => {
    req.logout((err) => {
      if (err) return next(err)
      res.redirect('/')
    })
  })
  .get('/api/locals', getAll)
  .get('/api/locals/search', filter)
  .get('/api/locals/sort', sort)
  .get(
    '/api/locals/delete-local/:_id',
    (req, res, next) => {
      if (req.isAuthenticated()) {
        return next()
      }
      return res.render('signup', { title: 'Tattler | SignUp' })
    },
    deleteLocalById
  )
  //*POST
  .post(
    '/api/locals/new-local',
    (req, res, next) => {
      if (req.isAuthenticated()) {
        return next()
      }
      return res.render('signup', { title: 'Tattler | SignUp' })
    },
    createLocal
  )
  .post(
    '/api/locals/delete-local',
    (req, res, next) => {
      if (req.isAuthenticated()) {
        return next()
      }
      return res.render('signup', { title: 'Tattler | SignUp' })
    },
    deleteLocalbyName
  )
  .post(
    '/api/locals/edit-local',
    (req, res, next) => {
      if (req.isAuthenticated()) {
        return next()
      }
      return res.render('signup', { title: 'Tattler | SignUp' })
    },
    editLocal
  )
  .post(
    '/login',
    passport.authenticate('login', {
      failureRedirect: '/login',
      successRedirect: '/',
      failureFlash: true,
    })
  )
  .post(
    '/signup',
    passport.authenticate('signup', {
      failureRedirect: '/signup',
      successRedirect: '/',
      failureFlash: true,
    })
  )

export default router
