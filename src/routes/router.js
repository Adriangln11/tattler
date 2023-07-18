const router = require('express').Router()
const {createLocal, editLocal, deleteLocal, getAll, filterByIdNameRank} =  require('../controllers/controllers.js')


router.post('/new-local', createLocal)

router.post('/delete-local' , deleteLocal)

router.post('/edit-local' , editLocal)
router.get('/locals' , getAll)
router.get('/search' , filterByIdNameRank)


module.exports = router