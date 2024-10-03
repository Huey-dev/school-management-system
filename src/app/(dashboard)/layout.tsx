export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex ">
      {/* left */}
      <div className="bg-red-50 md:w-[8%] lg:w-[16%] xl:w-[14%] w-[14%]">l</div>
      {/* middle */}
      {/* <div>{children}</div> */}
      {/* right */}
      <div className="bg-blue-50 md:w-[92%] lg:w-[84%] xl:w-[86%] w-[86%]"> r</div>
    </div>
  );
}
