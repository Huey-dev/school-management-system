import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* search bar */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="search-icon" width={14} height={14} />
        <input
          className="w-[200px] p-2 bg-transparent outline-none"
          type="text"
          placeholder="Search"
        />
      </div>
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
