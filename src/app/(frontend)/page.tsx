import Image from "next/image";

import { READ } from "../(backend)/gift/service"
import List from "./gift/list";
import { IGift } from "../(backend)/gift/types";

export default async function Home() {
  const gifts = await READ()
  
  return (
    <>
      <List data={gifts}/>  
    </>
  );
}
