import sql from "@/db"

export default async function READ() {
  return (await sql`SELECT * FROM gift`).map((i) => {
    id:i.id;
    name:i.name;
    avarage_price:i.avarage_price;
    desc:i.desc
  })
}


