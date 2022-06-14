import {Router} from "express"
import Users from "../../models/Users.js";
import {generateToken} from "../../helpers/token.js";
import {encrypt} from "../../helpers/crypt.js";

const authRoutes = new Router()

authRoutes.post("/login", async (req, res) => {
	const {user, password} = req.body
	if(!user || !password) throw new Error("Usuário ou senha não informados")

	const pwCrypt = encrypt(password.toString())
	const [User] = await Users.query()
		.columns('ID', 'nachname', 'email', 'acc', 'tel1', 'notificacoes')
		.where('kurz', '=', user)
		.where('pw', '=', pwCrypt)

	if(!User) throw new Error("Usuário não encontrado")

	const token = generateToken(User?.id)

	res.status(200).json({
		authenticated: true,
		token,
		user: User
	})
})

export default authRoutes