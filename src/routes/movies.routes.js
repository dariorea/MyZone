import express from "express";
import { getMovieID, getMovies, getSeries, getTrendings } from "../controllers/movies.controller.js";


const router = express.Router()

router.get("/", getMovies)
router.get("/series", getSeries)
router.get("/trendings", getTrendings)
router.get("/:id", getMovieID)

export default router