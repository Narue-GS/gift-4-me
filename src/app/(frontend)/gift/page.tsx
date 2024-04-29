import Image from "next/image";

import { READ } from "../../(backend)/api/gift/service"
import List from "./List";
import { IGift } from "../../(backend)/api/gift/types";

export const dynamic = "force-dynamic"
  
export default async function Home() {
  const gifts:IGift[]= await READ()
  
  return (
    <>
      <List data={gifts}/>  
    </>
  );
}
