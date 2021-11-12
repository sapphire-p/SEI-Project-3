import User from '../models/user.js'
// import Museum from '../models/museum.js'

export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.currentUser._id)
    if (!user) throw new Error()
    return res.status(200).json(user)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: 'Not found' })
  }
}

// export const addFavourite = async (req, res) => {
//   try {
//     const { id } = req.params
//     const museum = await Museum.findById(id)
//     if (!museum) throw new Error('Museum not found')
//     const user = await User.findById(req.currentUser._id)
//     if (!user) throw new Error('User not found')
//     const newFavourite = { ...favouriteMuseums, favouriteMuseums: id }
//     user.favourites.push(newFavourite)
//     await user.save({ validateModifiedOnly: true })
//     return res.status(200).json(user)
//   } catch (err) {
//     console.log(err)
//     return res.status(404).json({ message: err.message })
//   }
// }

