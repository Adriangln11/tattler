const LocalModel = require('../models/localmodel.js')
const createLocal = async (req, res, next) => {
  const { name, location, stars, category, comments, open, close } = req.body
  const locationData = location.split(',')
  const exist = await LocalModel.findOne({ name })
  if (exist)
    return res.json({
      message: `${name} already exists`,
      localID: exist._id,
    })
  try {
    const doc = await LocalModel.create({
      name,
      location: {
        state: locationData[0],
        city: locationData[1],
        street: locationData[2],
      },
      category: category.split(','),
      schedules: { open, close },
      stars: stars.split(','),
      comments: comments.split(','),
      ranking: (stars / stars.length).toFixed(2),
    })

    return res.json({ message: 'Created successfully', data: doc })
  } catch (error) {
    console.log(error)
    return res.json({ message: 'Error creating document' })
  }
}
const editLocal = async (req, res, next) => {
  const { name, location, stars, category, comments, open, close } = req.body
  const locationData = location.split(',')
  const newData = {}

  location
    ? (newData.location = {
        country: locationData[0],
        city: locationData[1],
        street: locationData[2],
      })
    : false
  stars ? (newData.stars = stars) : false
  category ? (newData.category = category) : false
  comments ? (newData.comments = comments) : false
  open ? (newData.open = open) : false
  close ? (newData.close = close) : false
  try {
    const doc = await LocalModel.findOne({ name })
    if (!doc) return res.json({ message: 'Local not found' })
    Object.keys(newData).forEach((key) => {
      if (key == 'stars' || key == 'category' || key == 'comments') {
        doc[key] = [...doc[key], newData[key]]
        if (key == 'stars') {
          const score = doc[key].reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
          )
          doc.ranking = (score / doc[key].length).toFixed(2)
        }
      } else {
        doc[key] = newData[key]
      }
    })
    await doc.save()
    return res.json({ message: 'Updated successfully', data: doc })
  } catch (error) {
    console.log(error)
    return res.json({ message: 'Error updating document' })
  }
}
const deleteLocalbyName = async (req, res, next) => {
  try {
    const doc = await LocalModel.deleteOne({ name: req.body.name })

    if (doc.deletedCount) return res.json({ message: 'Deleted successfully' })
    return res.json({ message: 'Local not found' })
  } catch (error) {
    console.log(error)
    return res.json({ message: 'Error deleting document' })
  }
}
const deleteLocalById = async (req, res, next) => {
  const { _id } = req.params
  try {
    await LocalModel.deleteOne({ _id })
    return res.json({ message: 'Deleted successfully' })
  } catch (error) {
    console.log(error)
    return res.json({ message: 'Error deleting document' })
  }
}

const getAll = async (req, res, next) => {
  const data = await LocalModel.find()
  return res.json({
    message: 'Completed successfully',
    results: data.length,
    data,
  })
}
const filter = async (req, res, next) => {
  const { _id, name, open, category, state, city, street } = req.query
  const queries = {}
  _id ? (queries._id = _id) : false
  name ? (queries.name = name) : false
  open ? (queries['schedules.open'] = open) : false
  state ? (queries['location.state'] = state) : false
  city ? (queries['location.city'] = city) : false
  street ? (queries['location.street'] = street) : false
  category ? (queries['category'] = { $in: [category] }) : false
  try {
    const doc = await LocalModel.find(queries)
    if (doc.length != 0)
      return res.json({
        message: 'Completed successfully',
        results: doc.length,
        data: doc,
      })
    return res.json({ message: 'Local not found' })
  } catch (error) {
    return res.json({ message: "The local doesn't exist" })
  }
}
const sort = async (req, res, next) => {
  try {
    const data = await LocalModel.aggregate([{ $sort: { ranking: -1 } }])
    return res.json({
      message: 'Complete successfully',
      results: data.length,
      data,
    })
  } catch (error) {
    return res.json({ message: 'Error getting results' })
  }
}

module.exports = {
  createLocal,
  editLocal,
  deleteLocalbyName,
  deleteLocalById,
  getAll,
  filter,
  sort,
}
