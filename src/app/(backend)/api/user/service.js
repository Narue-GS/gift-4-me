'use server'

import sql from "@/db"


export async function CREATE(data) {
  return await sql`
    INSERT INTO user_ (id, name, email, password)
    VALUES (${data.id}, ${data.name}, ${data.email}, ${data.password})
  `
}

export async function READ() {
  return (await sql`SELECT * FROM user_ ORDER BY id`).map((i) => ({
    id:i.id,
    name:i.name,
    email:i.email,
    password:i.password
  }))
} 

export async function UPDATE(data) {
  return await sql`
    UPDATE user_
    SET name = ${data.name},
        email = ${data.email},
        password = ${data.password}
    WHERE id = ${data.id}
  `
}

export async function DELETE_(id) {
  return await sql`
    DELETE FROM user_
    WHERE id = ${id}
  `
}




