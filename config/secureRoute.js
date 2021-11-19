import User from '../models/user.js'
import jwt from 'jsonwebtoken'
import { secret } from './environment.js'

export const secureRoute = async (req, res, next) => {
  try {
    // check if theres a token on the incoming request
    if (!req.headers.authorization) throw new Error()
    // extract the token from request
    const token = req.headers.authorization.replace('Bearer ', '')
    // get the user info from token
    const payload = jwt.verify(token, secret)
    //find the user in the db to check they exist
    const userToVerify = await User.findById(payload.sub)
    // otherwise unauthorized
    if (!userToVerify) throw new Error()

    // set new key to req object 'currentUser' , sets value as user object from request above
    req.currentUser = userToVerify

    next()
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized' })
  }
}