const router = require('express').Router()
const {createLocal, editLocal, deleteLocal} =  require('../controllers/controllers.js')


router.post('/new-local', createLocal)

router.post('/delete-local' , deleteLocal)

router.post('/edit-local' , editLocal)

module.exports = router