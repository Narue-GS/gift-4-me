import Link from "next/link";

export default async function Home() {
  return (
    <>
      <h1>Hello World!</h1>
      <Link href={"/user"}>AAAA</Link>
    </>
  );
}
