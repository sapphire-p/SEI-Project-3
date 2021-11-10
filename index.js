import express from 'express'
import mongoose from 'mongoose'
import { port, dbURI } from './config/environment.js'
import router from './config/router.js'

const app = express()



const startServer = async () => {
  try {
    await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('😎 Database has connected successfully')

    // logger middleware
    app.use((req, _res, next) => {
      console.log(`Incoming ${req.method} request to ${req.url}`)
      next()
    })

    // body parser
    app.use(express.json())

    // * middleware for router to handle incoming requests
    app.use('/api', router)

    app.listen(port, () => console.log(`🚀 Express is up and running  on port ${port}`))
  } catch (err) {
    console.log(err)
    console.log('something has gone wrong!')
  }
}
startServer()


// app.use((req, res, next) => {
//   if (req.url === '/') {
//     res.end('Welcome to the home page')
//   }
//   next()
// })

// app.use((_req, res) => {
//   return res.status(404).json({ message: '⛔️ not found' })
// })



