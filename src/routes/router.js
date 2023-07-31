const router = require('express').Router()
const {
  createLocal,
  editLocal,
  deleteLocalbyName,
  getAll,
  filter,
  sort,
  deleteLocalById,
} = require('../controllers/controllers.js')

router
  .post('/new-local', createLocal)

  .post('/delete-local', deleteLocalbyName)
  .get('/delete-local/:_id', deleteLocalById)

  .post('/edit-local', editLocal)
  .get('/locals', getAll)
  .get('/locals/search', filter)
  .get('/locals/sort', sort)
  .get('/', (req, res) => {
    return res.json({ greeting: 'Hello API!' })
  })

module.exports = router
