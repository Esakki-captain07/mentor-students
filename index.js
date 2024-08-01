import express from "express";
import 'dotenv/config.js'
import routes from "./src/router/index.js";

const PORT = process.env.PORT

const app = express()
app.use(express.json())
app.use(routes)

app.listen(PORT,()=>console.log(`app listerning on ${PORT}`))