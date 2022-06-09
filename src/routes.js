import {Router} from "express"
import authRoutes from "./routes/auth/authRoutes"

const router = new Router()

router.use("/auth", authRoutes)

export default router