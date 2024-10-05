"use client";
import Image from "next/image";
import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "Mon",
    present: 40,
    absent: 10,
  },
  {
    name: "Tue",
    present: 30,
    absent: 10,
  },
  {
    name: "Wed",
    present: 20,
    absent: 0,
  },
  {
    name: "Thu",
    present: 80,
    absent: 0,
  },
  {
    name: "Fri",
    present: 90,
    absent: 21,
  },
];

const Attendancechart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className=" flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image alt="" src="/moreDark.png" height={20} width={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
            align="left"
            verticalAlign="top"
          />
          <Bar
            dataKey="present"
            fill="#FAE27C"
            activeBar={<Rectangle fill="#FAE27C" stroke="#FAE27C" />}
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absent"
            fill="#C3EBFA"
            activeBar={<Rectangle fill="#C3EBFA" stroke="#C3EBFA" />}
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Attendancechart;
