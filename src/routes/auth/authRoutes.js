import {Router} from "express"

const authRoutes = new Router()

authRoutes.post("/login", async (req, res) => {
	res.status(200).json({
		authenticated: true
	})
})

export default authRoutes