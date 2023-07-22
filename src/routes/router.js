const router = require('express').Router()
const {createLocal, editLocal, deleteLocal, getAll, filter, sort, deleteLocalJson} =  require('../controllers/controllers.js')


router.post('/new-local', createLocal)

router.post('/delete-local' , deleteLocal)
router.get('/delete-local/:_id' , deleteLocalJson)

router.post('/edit-local' , editLocal)
router.get('/locals' , getAll)
router.get('/locals/search' , filter)
router.get('/locals/sort' , sort)


module.exports = router