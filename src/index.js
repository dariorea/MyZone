import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import moviesRouter from "./routes/movies.routes.js";
import animationRouter from "./routes/animation.routes.js";

dotenv.config()
const app = express()

app.use(express.json())
app.use(express.static("public"))
app.use(cors())

const PORT = 3000

app.use("/request", moviesRouter)
app.use("/lost", animationRouter)

app.listen(PORT, () => {
    console.log(`Hola desde el puerto: ${PORT}`)
})