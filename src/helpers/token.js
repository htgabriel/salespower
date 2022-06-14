import jwt from "jsonwebtoken"

export function generateToken(id) {
	return jwt.sign({id}, process.env.SECRET, {expiresIn: "2 minutes"})
}

export function verifyToken(req, res, next){
	const token = req.headers.authorization.slice(7) || null
	if (!token) throw new Error("Token not provided")

	jwt.verify(token, process.env.SECRET, function(err, decoded) {
		if (err) throw new Error("Failed to authenticate token or token is expired")
	})

	next()
}