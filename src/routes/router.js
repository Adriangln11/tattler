const router = require('express').Router()
const {createLocal, editLocal, deleteLocal, getAll, filter, sort} =  require('../controllers/controllers.js')


router.post('/new-local', createLocal)

router.post('/delete-local' , deleteLocal)

router.post('/edit-local' , editLocal)
router.get('/locals' , getAll)
router.get('/locals/search' , filter)
router.get('/locals/sort' , sort)


module.exports = router