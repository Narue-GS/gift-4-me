import sql from "@/db"

export default async function SELECT() {
  return await sql`SELECT * FROM gift`
}