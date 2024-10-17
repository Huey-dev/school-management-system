import Announcement from "@/app/components/Announcement";
import BigCalendar from "@/app/components/Bigcalender";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="flex-1 p-4 flex flex-col xl:flex-row gap-4">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* TEACHER INFO CARD */}
          <div className="bg-sky py-6 px-4 rounded-md flex gap-4 flex-1">
            <div className="w-1/3">
              <Image
                src="/avatar.png"
                alt="teacherimg"
                className="rounded-full w-36 h-36 object-cover"
                height={144}
                width={144}
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">John doe</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
              </p>
              <div className="text-xs font-medium flex items-center justify-between gap-2 flex-wrap">
                <div className="w-full lg:w-full 2xl:w-1/3 flex items-center md:w-1/3 gap-2">
                  <Image
                    src="/blood.png"
                    alt="blood-type"
                    height={14}
                    width={14}
                  />
                  <span>O+</span>
                </div>
                <div className="w-full lg:w-full 2xl:w-1/3 flex items-center md:w-1/3 gap-2">
                  <Image src="/date.png" alt="date" height={14} width={14} />
                  <span>January 2025</span>
                </div>
                <div className="w-full lg:w-full 2xl:w-1/3 flex items-center md:w-1/3 gap-2">
                  <Image src="/mail.png" alt="mail" height={14} width={14} />
                  <span>johndoe@gmail.com</span>
                </div>
                <div className="w-full lg:w-full 2xl:w-1/3 flex items-center md:w-1/3 gap-2">
                  <Image
                    src="/phone.png"
                    alt="phone-no"
                    height={14}
                    width={14}
                  />
                  <span>1 234 567 089</span>
                </div>
              </div>
            </div>
          </div>
          {/* SMALL CARDS */}
          <div className=" flex-1 flex flex-wrap gap-4 justify-between">
            {/* CARDS */}
            <div className="bg-white p-4 gap-4 rounded-md flex w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleAttendance.png"
                alt="singleattendance"
                height={24}
                width={24}
              />
              <div className="">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            <div className="bg-white p-4 gap-4 rounded-md flex w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleBranch.png"
                alt="singlebranch"
                height={24}
                width={24}
              />
              <div className="">
                <h1 className="text-xl font-semibold">2</h1>
                <span className="text-sm text-gray-400">Branches</span>
              </div>
            </div>
            <div className="bg-white p-4 gap-4 rounded-md flex w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleLesson.png"
                alt="singlelesson"
                height={24}
                width={24}
              />
              <div className="">
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>
            <div className="bg-white p-4 gap-4 rounded-md flex w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleClass.png"
                alt="singleclass"
                height={24}
                width={24}
              />
              <div className="">
                <h1 className="text-xl font-semibold">14</h1>
                <span className="text-sm text-gray-400">Classes</span>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1>Teacher&apos;s schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        {/* SHORTCUT COMPONENT */}
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-sm text-gray-400">
            <Link className="p-3 rounded-md bg-skylight" href="/">Teacher&apos;s classes</Link>
            <Link className="p-3 rounded-md bg-purplelight" href="/">Teacher&apos;s students</Link>
            <Link className="p-3 rounded-md bg-yellow" href="/">Teacher&apos;s lessons</Link>
            <Link className="p-3 rounded-md bg-orange-200" href="/">Teacher&apos;s exams</Link>
            <Link className="p-3 rounded-md bg-pink-50" href="/">Teacher&apos;s assignments</Link>
          </div>
        </div>
        {/* PERFORMANCE COMPONENT */}
        <div className=""></div>
        {/* ANNOUNCEMENT */}
        <Announcement />
      </div>
    </div>
  );
};

export default Page;
