"use client";

import { time } from "console";
import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsun dolor sit aamet, Lorem ipsum sit met amet",
  },
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsun dolor sit aamet, Lorem ipsum sit met amet",
  },
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsun dolor sit aamet, Lorem ipsum sit met amet",
  },
];
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Calender = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" height={20} width={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((e) => (
          <div
            className="p-5 rounded-sm border-2 border-gray-100 border-t-4 odd:border-t-sky even:border-t-purple"
            key={e.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600 ">{e.title}</h1>
              <span className="text-xs text-gray-300">{e.time}</span>
            </div>
            <span className="mt-2 text-gray-400 text-sm">{e.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calender;
