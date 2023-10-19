import mongoose from 'mongoose'

const LocalSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: Object },
    category: { type: [String], default: [] },
    comments: { type: [String] },
    stars: { type: [Number], default: [] },
    schedules: { type: Object, default: {} },
    ranking: { type: Number, default: 0 },
  },
  { timestamps: true, versionKey: false }
)

export default mongoose.model('LocalModel', LocalSchema)
