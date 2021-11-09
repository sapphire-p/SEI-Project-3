import mongoose  from 'mongoose'

const museumSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  address: { type: String, required: true, unique: true },
  region: { type: String, required: true },
  date_established: { type: Number, required: true },
  description: { type: String, required: true, maxlength: 300 },
  collection_types: [{ type: String, required: true }]
})

export default mongoose.model('Museum', museumSchema)