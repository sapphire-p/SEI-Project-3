import Museum from '../models/museum.js'

export const getAllMuseums = async (_req, res) => {
  const museums = await Museum.find()
  return res.status(200).json(museums)
}

export const getSingleMuseum = async (req, res) => {
  try {
    const { id } = req.params
    const singleMuseum = await Museum.findById(id)
    if (!singleMuseum) throw new Error('museum not found in db')
    return res.status(200).json(singleMuseum)
  } catch (err) {
    console.log(err)
    return res.status(404).json( { message: err.message })
  }
}