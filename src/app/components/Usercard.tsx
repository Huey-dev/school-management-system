import Image from "next/image";
import React from "react";

const Usercard = ({ type }: { type: string }) => {
  return (
    <div className="p-4 flex-1 rounded-2xl odd:bg-purple even:bg-yellow min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2024/25
        </span>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4">1,234</h1>
      <h2 className="text-sm capitalize font-medium text-gray-400">{type}</h2>
    </div>
  );
};

export default Usercard;
