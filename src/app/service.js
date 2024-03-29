import sql from "@/db"

export default async function READ() {
  return await sql`SELECT * FROM gift`
}