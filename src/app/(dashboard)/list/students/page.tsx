import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import Tablesearch from "@/app/components/Tablesearch";
import { role, studentsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Define the Teacher type
type Student = {
  id: number;
  studentId: string;
  name: string;
  email?: string;
  photo: string;
  phone?: string;
  grade: number
  class: string;
  address: string;
};
const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student ID",
    accessor: "studentId",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Mobile",
    accessor: "mobile",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];
const Page = () => {
  const renderRow = (item: Student): JSX.Element => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purplelight"
    >
      <td className="flex items-center gap-4 p-4">
        <Image
          src={item.photo}
          alt="teachers picture"
          height={40}
          width={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="fle flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item.class}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.studentId}</td>
      <td className="hidden md:table-cell">{item.grade}</td>    
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/students/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-sky">
              <Image src="/view.png" alt="view" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-red-600">
              <Image src="/delete.png" alt="delete" width={16} height={16} />
            </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white h-screen p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Students</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <Tablesearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow">
              <Image src="/filter.png" alt="filter" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow">
              <Image src="/sort.png" alt="filter" width={14} height={14} />
            </button>
            {role === "admin" && (
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow">
                <Image src="/plus.png" alt="filter" width={14} height={14} />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <div className="">
        <Table data={studentsData} columns={columns} renderRow={renderRow} />
      </div>

      {/* PAGINATION */}
      <div className="">
        <Pagination />
      </div>
    </div>
  );
};

export default Page;
