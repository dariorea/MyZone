import express from "express";
import { getAllSeries } from "../controllers/series.controller.js";

const router = express.Router()

router.get("/", getAllSeries)

export default router