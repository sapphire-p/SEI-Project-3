import User from '../models/user.js'
import jwt from 'jsonwebtoken'
import { secret } from '../config/environment.js'

export const registerUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body)
    return res.status(201).json({ message: `Welcome ${newUser.username}` })
  } catch (err) {
    return res.status(422).json(err)
  }
}

export const loginUser = async (req, res) => {
  try {
    // find user in the db
    const userToLogin = await User.findOne({ username: req.body.username })
    // check if user exists, if not, throw an error
    // also check if passwords match
    if (!userToLogin || !userToLogin.validatePassword(req.body.password)) {
      throw new Error()
    }
    // generate a token for the user
    const token = jwt.sign({ sub: userToLogin._id }, secret, { expiresIn: '21 days' })
    // return the token in the response
    return res.status(200).json({ message: `Welcome back ${userToLogin.username}`, token })
  } catch (err) {
    return res.status(422).json({ message: 'Unauthorized' })
  }
}