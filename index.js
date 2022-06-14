import path, {dirname} from 'path'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
// noinspection ES6UnusedImports
import * as asyncErrors from "express-async-errors"
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import Knex from "knex"
import {Model} from 'objection'
import routes from "./src/routes"
import config from "./src/config/knexfile.js"

const PORT = process.env.NODE_PORT || 3000
const environment = process.env.NODE_ENV ? process.env.NODE_ENV.trim() : 'development'
const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config({ path: path.join(__dirname, `.env.${environment}`)})

const knex = Knex( config)
Model.knex(knex)

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(routes)

app.listen(PORT, () => {
	// verifyToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTQ4MDY0NTksImV4cCI6MTY1NDgwNjU3OX0.o2Ee2As0fRD7z83tvBEs4oRcrI3R-mluA5yOJhponGc')
})

app.use((error, req, res, next) => {
	res.status(400).json({
		error: true,
		message: error.toString()
	})
	next()
})