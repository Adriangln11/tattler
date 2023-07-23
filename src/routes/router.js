const router = require('express').Router()
const {createLocal, editLocal, deleteLocalbyName, getAll, filter, sort, deleteLocalById, notFound} =  require('../controllers/controllers.js')


router
    .post('/new-local', createLocal)

    .post('/delete-local' , deleteLocalbyName)
    .get('/delete-local/:_id' , deleteLocalById)

    .post('/edit-local' , editLocal)
    .get('/locals' , getAll)
    .get('/locals/search' , filter)
    .get('/locals/sort' , sort)
    .get('/:404', notFound)


module.exports = router