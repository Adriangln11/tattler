const mongoose = require('mongoose')
require('dotenv/config')


try {
    mongoose.connect(process.env.MONGO_URI, { 'useNewUrlParser' : true,useUnifiedTopology: true })
     .then(console.log('DB connected successfully'))
} catch (error) {
    console.log('Error connecting to Mongoose', error)
}