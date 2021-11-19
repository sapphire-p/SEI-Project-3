import User from '../models/user.js'


export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.currentUser._id).populate('favourites')
    if (!user) throw new Error()
    return res.status(200).json(user)
  } catch (err) {
    return res.status(404).json({ message: 'Not found' })
  }
}

export const addFavourite = async (req, res) => {

  try {
    const { id } = req.params
    const user = await User.findById(id)
    if (!user) throw new Error()
    user.favourites.push(req.body.favourites)
    await user.save({ validateModifiedOnly: true })
    return res.status(200).json(user)
  } catch (err) {
    return res.status(404).json({ message: err.message })
  }

}

export const deleteFavourite = async (req, res) => {

  try {
    const { id, favouriteId } = req.params
    const user = await User.findById(id)

    if (!user) throw new Error()

    const faveIndex = user.favourites.indexOf(favouriteId)

    const faveToDelete = user.favourites[faveIndex]

    if (!faveToDelete) throw new Error('Favourite not found')

    await user.favourites.splice(faveIndex, 1)
    await user.save({ validateModifiedOnly: true })

    return res.sendStatus(204)

  } catch (err) {
    return res.status(404).json({ message: err.message })
  }

}

