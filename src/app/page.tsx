"use client";
// import { Metadata } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";
// export const metadata: Metadata = {
//   title: "Next.js",
// };

const Page = () => {
  // pathname用以確定鏈接是否處於活動狀態
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div>
      <div>
        <button onClick={() => router.push("/dashboard")}>
          Go to dashboard
        </button>
      </div>
      <br />
      <div>
        <button onClick={() => redirect("/abc")}>
          Go to abc
      </button>
    </div> 
    </div>
    

  );
};
export default Page;
