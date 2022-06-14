import {Router} from "express"
import Users from "../../models/Users";
import {verifyToken} from "../../helpers/token";

const userRoutes = new Router()

userRoutes.get('/me', verifyToken, async (req, res) => {
	const {id} = req.body

	if(!id) throw new Error("Id do usuário não informado")

	const [User] = await Users.query()
		.where('ID', '=', id)

	res.status(200).json({
		user: User
	})
})

export default userRoutes