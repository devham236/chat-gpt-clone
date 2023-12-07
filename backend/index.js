const express = require("express")
const cors = require("cors")
require("dotenv").config()

const server = express()
server.use(express.json())
server.use(cors())

server.post("/completions", async (req, res) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: req.body.message }],
      max_tokens: 100,
    }),
  }

  try {
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    )
    const data = await response.json()
    res.status(200).send(data)
  } catch (error) {
    console.log(error)
  }
})

server.listen(8000, () => {
  console.log("Your server is running on port: 8000")
})
