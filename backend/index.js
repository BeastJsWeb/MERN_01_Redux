import express from "express"
import mongoose from "mongoose"
import router from "./API/routes/router.js"
import fileUpload from "express-fileupload"
import { PORT, DB_URL } from "./API/config/config.js"
import { corsMiddleware } from "./API/middleware/cors.middleware.js"

// http://localhost:3001/api/posts // posts
// http://localhost:3001 // picture

const app = express()

app.use(corsMiddleware)
app.use(fileUpload({})) // for pictures
app.use(express.json())  // for GET, POST...
app.use(express.static('static')) // for pictures
app.use('/api', router)

// DB__connect
async function startApp() {
  try {
    await mongoose.connect(
      DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }
    )
    app.listen(PORT, () => console.log(`Server starting on port ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

startApp()