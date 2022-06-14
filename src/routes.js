import {Router} from "express"
import authRoutes from "./routes/auth/authRoutes"
import userRoutes from "./routes/user/userRoutes.js"

const router = new Router()

router.use("/auth", authRoutes)
router.use("/user", userRoutes)

export default router