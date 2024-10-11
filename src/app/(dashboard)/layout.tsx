import Image from "next/image";
import Link from "next/link";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      {/* left */}
      <div className=" md:w-[8%] lg:w-[16%] xl:w-[14%] w-[14%] p-4">
        <Link
          href="/"
          className="flex items-center gap-2 justify-center lg:justify-start"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block text-gray-400 text-lg font-bold">eduportal</span>
        </Link>
        <Menu />
      </div>

      <div className="md:w-[92%] lg:w-[84%] xl:w-[86%] w-[86%] bg-[#F7F8FA] ">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
