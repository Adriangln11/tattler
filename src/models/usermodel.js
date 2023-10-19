import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
  email: { type: String },
  password: { type: String },
})

export default mongoose.model('UserModel', UserSchema)
