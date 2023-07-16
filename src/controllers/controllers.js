const  LocalModel = require( '../models/localmodel.js')

const createLocal = async (req, res, next) => {
    const {name, location, stars, category, comments, open, close} = req.body
    const locationData = location.split(',')
    const exist = await LocalModel.findOne({name})
    if (exist) return res.json({message:`${name} already exists`,localID:exist._id})
    try {
        const doc = await LocalModel.create({
            name, 
            location: {state: locationData[0], city: locationData[1], street: locationData[2]},
            category: category.split(','),
            schedules: {open, close},
            stars: stars.split(','),
            comments: comments.split(',')
        })

        return res.json({message: 'Created successfully', data: doc})
    } catch (error) {
        console.log(error)
        return res.json({message: 'Error creating document'})
    }
}
const editLocal = async (req, res, next) => {
    const {name, location, stars, category, comments, open, close} = req.body
    const locationData = location.split(',')
    const newData = {}
    location ? newData.location = {country:locationData[0], city:locationData[1],street:locationData[2]}:false
    stars ? newData.stars = stars:false
    category ? newData.category = category:false
    comments ? newData.comments = comments:false
    open ? newData.open = open:false
    close ? newData.close = close:false
    try {
        const doc = await LocalModel.findOne({name})
        Object.keys(newData).forEach(key => {
            if (key == 'stars' || key == 'category' || key == 'comments'){
                doc[key] = [...doc[key],newData[key]]
            }else{
                doc[key] = newData[key]
            }
        })
        await doc.save()
        return res.json({message: 'Updated successfully', data: doc})
    } catch (error) {
        console.log(error)
        return res.json({message: 'Error updating document'})
    }
}
const deleteLocal = async (req, res, next) => {
    try{   
        await LocalModel.deleteOne({name: req.body.name})
        return res.json({message: 'Deleted successfully'})
    }catch(error){
        console.log(error)
        return res.json({message: 'Error deleting document'})
    }
}
module.exports = {
    createLocal,
    editLocal,
    deleteLocal
}