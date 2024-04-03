'use server'

import sql from "@/db"

export async function CREATE(data) {
  return await sql`
    INSERT INTO gift (id, name, avarage_price)
    VALUES (${data.id}, ${data.name}, ${data.id})
  `
}

export async function READ() {
  return (await sql`SELECT * FROM gift ORDER BY id`).map((i) => ({
    id:i.id,
    name:i.name,
    avarage_price:i.avarage_price,
    desc:i.desc,
    taken:i.taken
  }))
} 

export async function DELETE_(id) {
  return await sql`
    DELETE FROM gift
    WHERE id = ${id}
  `
}



export async function updateTaken(data) {
  return await sql`
    UPDATE gift
    SET taken = ${!data.taken}
    WHERE id = ${data.id}
  `
}

