import Image from "next/image";
import React from "react";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* search bar */}
      <Searchbar/>
      {/* Icons and avatar */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="message-icon" width={20} height={20} />
        </div>
        <div className="relative bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image
            src="/announcement.png"
            alt="announcement-icon"
            width={20}
            height={20}
          />
          <div className="rounded-full text-xs absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">John</span>
          <span className="text-[10px] text-right  text-gray-300">John</span>
        </div>
        <Image
          className="rounded-full"
          src="/avatar.png"
          alt="avatar-icon"
          height={36}
          width={36}
        />
      </div>
    </div>
  );
};

export default Navbar;
