import path, {dirname} from 'path'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import Knex from "knex"
import {Model} from 'objection'
import routes from "./src/routes.js"

const PORT = process.env.NODE_PORT | 8000
const ambient = process.env.NODE_ENV ? process.env.NODE_ENV.trim() : 'development'
const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '.env', ambient)})

const knex = Knex({
	client: "mysql2",
	useNullAsDefault: true,
	connection: {
		host: process.env.DB_HOST,
		port: 3306,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE
	}
})
Model.knex(knex)

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(routes)

app.listen(PORT, () => {
	console.log('Running...')
})