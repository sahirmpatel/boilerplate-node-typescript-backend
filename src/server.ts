import express from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())
/**
 * url encoded for using query strings
 */
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send(' API is running...')
})

export default app
