import Image from "next/image";

import sql from "@/db"
import READ from "./service"

export default async function Home() {
  const gifts = await READ()
  return (
    gifts.map((i) => (
      <p key={i.id}>
        {i.name}
      </p>
    ))
  );
}
