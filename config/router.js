import express from 'express'
import { registerUser } from '../controllers/auth.js'
import { getAllMuseums, getSingleMuseum } from '../controllers/museums.js'

const router = express.Router()
router.route('/museums')
  .get(getAllMuseums)


router.route('/museums/:id')
  .get(getSingleMuseum)

router.route('/register')
  .post(registerUser)



export default router