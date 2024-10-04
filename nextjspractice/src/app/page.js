import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div>

<h1 className="text-center text text-3xl my-5 font-bold">Hello world</h1>

<Link href="aboutus" className="py-2 px-3 border border-collapse bg-slate-400">aboutus</Link>
<Link href="contactus" className="py-2 px-3 border border-collapse bg-slate-400">contactus</Link>
   </div>

  );
}
