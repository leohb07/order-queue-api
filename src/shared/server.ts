import "dotenv/config"
import "express-async-errors"

import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

app.listen(process.env.PORT, () => {
  console.log(`Server started on port: ${process.env.PORT}`)
})

