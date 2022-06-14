import path, {dirname} from "path";
import {fileURLToPath} from "url";
import dotenv from "dotenv";

const environment = process.env.NODE_ENV ? process.env.NODE_ENV.trim() : 'development'
const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, `../../.env.${environment}`)})

export default {
	client: "mysql2",
	connection: {
		host: process.env.DB_HOST,
		port: 3306,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE
	},
	migrations: {
		directory: './src/migrations'
	},
	type: "development"
}