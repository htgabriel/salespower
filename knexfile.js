/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
	development: {
		client: "mysql2",
		connection: {
			host: "devgo-development.cptqv8rsrmdk.us-east-1.rds.amazonaws.com",
			port: 3306,
			user: "admin",
			password: "ZmckxG2giteLr2{",
			database: "gmanalysis"
		},
		migrations: {
			directory: './src/migrations'
		}
	},

	production: {
		client: "mysql2",
		connection: {
			host: "devgo-development.cptqv8rsrmdk.us-east-1.rds.amazonaws.com",
			port: 3306,
			user: "admin",
			password: "ZmckxG2giteLr2{",
			database: "gmanalysis"
		},
		migrations: {
			directory: './src/migrations'
		}
	},
};
