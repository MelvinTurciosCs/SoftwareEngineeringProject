import express from "express"
import { addReserve } from "../controllers/reservations.js"

const router = express.Router()
router.post("/add",addReserve)

export default router