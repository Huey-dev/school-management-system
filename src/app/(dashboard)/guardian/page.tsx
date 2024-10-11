import Announcement from "@/app/components/Announcement";
import BigCalender from "@/app/components/Bigcalender";
import Calendar from "@/app/components/Calender";

const page = () => {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule (John)</h1>
          <BigCalender/>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Calendar />
        <Announcement />
      </div>
    </div>
  );
};

export default page;
