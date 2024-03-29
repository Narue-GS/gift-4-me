import Image from "next/image";

import sql from "@/db"
import SELECT from "./service"

export default async function Home() {
  const gifts = await SELECT()
  return (
    gifts.map((i) => (
      <p key={i.id}>
        {i.name}
      </p>
    ))
  );
}
