const router = require('express').Router()
const  LocalModel = require( '../models/localmodel.js')



router.post('/new-local', async (req, res) => {
    const {name, location, stars, category, comments} = req.body
    console.log(name, location, stars, category, comments)
    return res.json({ message: 'Added local'})
})

router.post('/delete-local' , async (req, res) => {
    return res.json({ message: 'Deleted' })
})

router.post('/edit-local' , async (req, res) => {
    return res.json({ message: 'Edited' })
})

module.exports = router