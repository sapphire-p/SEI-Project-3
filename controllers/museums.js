import Museum from '../models/museum.js'

export const getAllMuseums = async (_req, res) => {
  const museums = await Museum.find()
  return res.status(200).json(museums)
}

export const getSingleMuseum = async (req, res) => {
  try {
    const { id } = req.params
    const singleMuseum = await Museum.findById(id).populate('reviews.owner')
    if (!singleMuseum) throw new Error('museum not found in db')
    return res.status(200).json(singleMuseum)
  } catch (err) {
    console.log(err)
    return res.status(404).json( { message: err.message })
  }
}

export const addReview = async (req, res) => {
  try {
    const { id } = req.params
    const museum = await Museum.findById(id)
    if (!museum) throw new Error()
    const newReview = { ...req.body, owner: req.currentUser._id }
    museum.reviews.push(newReview)
    await museum.save({ validateModifiedOnly: true })
    return res.status(200).json(museum)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: err.message })
  }
}

export const deleteReview = async (req, res) => {
  try {
    const { id, reviewsId } = req.params
    // find museum where comment is
    const museum = await Museum.findById(id)
    // if none, throw error
    if (!museum) throw new Error('Museum not found')
    // find correct comment
    const reviewToDelete = museum.reviews.id(reviewsId)
    // if none, throw error
    if (!reviewToDelete) throw new Error('Review not found')
    // if owner of review isnt current user, throw error
    if (!reviewToDelete.owner.equals(req.currentUser._id)) throw new Error('Unauthorized')
    // remove review
    await reviewToDelete.remove()
    // save museum after review is deleted
    await museum.save({ validateModifiedOnly: true })
    // return positive response
    return res.sendStatus(204)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: err.message })
  }
}