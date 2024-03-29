import postgres from "postgres"

let connectionString = process.env.DATABASE_URL

let sql = postgres(connectionString)


export default sql