import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-100 h-screen flex flex-col items-center w-full py-8">
      <div className="font-bold text-4xl text-[#193b4d] py-6">
        Switcheo Frontend - Jawad
      </div>
      <div className="flex flex-col items-center w-full gap-4">
        <Link
          href="/problems/1"
          className="w-[80%] p-4 text-center rounded-lg bg-[#193b4d] text-[#e2fca4] text-xl hover:bg-[#e2fca4] hover:text-[#193b4d] hover:cursor-pointer transition-colors duration-300"
        >
          Problem 1
        </Link>

        <Link
          href="/problems/2"
          className="w-[80%] p-4 text-center rounded-lg bg-[#193b4d] text-[#e2fca4] text-xl hover:bg-[#e2fca4] hover:text-[#193b4d] hover:cursor-pointer transition-colors duration-300"
        >
          Problem 2
        </Link>

        <Link
          href="/problems/3"
          className="w-[80%] p-4 text-center rounded-lg bg-[#193b4d] text-[#e2fca4] text-xl hover:bg-[#e2fca4] hover:text-[#193b4d] hover:cursor-pointer transition-colors duration-300"
        >
          Problem 3
        </Link>
      </div>
    </div>
  );
}

// #193b4d #e2fca4
