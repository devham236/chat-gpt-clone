const express = require("express")
const cors = require("cors")
require("dotenv").config()

const server = express()
server.use(express.json())
server.use(cors())

server.listen(8000, () => {
  console.log("Your server is running on port: 8000")
})
