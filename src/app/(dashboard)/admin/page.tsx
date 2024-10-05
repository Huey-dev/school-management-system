import Announcement from "@/app/components/Announcement";
import Attendancechart from "@/app/components/Attendancechart";
import Calender from "@/app/components/Calender";
import Countcharts from "@/app/components/Countcharts";
import Financechart from "@/app/components/Financechart";
import Usercard from "@/app/components/Usercard";
import React from "react";
import 'react-calendar/dist/Calendar.css';

const page = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* user card */}
        <div className="flex flex-wrap gap-4 justify-between">
          <Usercard type="admins" />
          <Usercard type="guardians" />
          <Usercard type="students" />
          <Usercard type="staffs" />
        </div>
        {/* middle charts */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* count charts */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <Countcharts />
          </div>
          {/* attendance charts */}
          <div className="w-full lg:w-2/3 h-[450px]">
          <Attendancechart/>
          </div>
        </div>
        {/* bottom charts */}
        <div className="w-full h-[500px]">
          <Financechart/>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg w-full lg:w-1/3 flex flex-col gap-8">
      <Calender/>
      <Announcement/>
      </div>
    </div>
  );
};

export default page;
