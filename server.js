const express = require('express')
const morgan = require('morgan')

const app = express()
const port = 3000

app.use(morgan(':method :date :status :total-time'))

app.get('/', (req, res) => {
  res.end("morgan logger app")
})

app.listen(port, () => {
  console.log(`serving up crazy stuff on port ${port}`)
})
