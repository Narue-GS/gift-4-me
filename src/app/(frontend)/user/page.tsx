import Image from "next/image";

import { READ } from "../../(backend)/api/user/service"
import List from "./List";
import { IUser } from "@/app/(backend)/api/user/types";

export const dynamic = "force-dynamic"
  
export default async function Home() {
  const users:IUser[]= await READ()
  
  return (
    <>
      <List data={users}/>  
    </>
  );
}
