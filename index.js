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

app.listen(PORT)
app.use("/", (req, res) => res.status(200).json({name: "Sales Power APP", state: `Running on port ${PORT}`}))

app.use((error, req, res, next) => {
	res.status(400).json({
		error: true,
		message: error.toString()
	})
	next()
})