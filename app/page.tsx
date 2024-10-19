import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className=" my-5 flex gap-5">
        <div className="text-3xl">Hello World</div>
        <Link href={"/teacher"}>
          <div className="btn btn-secondary">Check Teacher</div>
        </Link>
      </div>
    </>
  );
}
