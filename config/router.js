import express from 'express'
import { getAllMuseums, getSingleMuseum } from '../controllers/museums.js'

const router = express.Router()
router.route('/museums')
  .get(getAllMuseums)


router.route('/museums/:id')
  .get(getSingleMuseum)

export default router