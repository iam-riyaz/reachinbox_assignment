import React from "react";

function LeadDetailCard() {
  return (
    <div className="">
      {/* head */}
      <div className="flex justify-center my-[16px]">
        <div className="h-[36px] w-[268px] flex items-center rounded  dark:bg-[#333335]  bg-[#eeeeee]">
          <p className="pl-4 text-sm font-semibold dark:text-[#e0e0e0] text-[#4a4a4a] ">
            Lead Details
          </p>
        </div>
      </div>
      {/* details */}
      <div className="flex justify-center">
        <div className="h-[217px] w-[268px]  flex flex-col gap-5 py-2">
          <div className="flex justify-between px-4">
            <p className="text-xs font-semibold text-[#5d5d5d] dark:text-[#d3d3d3]">
              Name
            </p>
            <p className="text-xs text-[#7a7a7a]">Riyaz</p>
          </div>
          <div className="flex justify-between px-4">
            <p className="text-xs font-semibold text-[#5d5d5d] dark:text-[#d3d3d3]">
              Contact
            </p>
            <p className="text-xs text-[#7a7a7a]">+92492487929</p>
          </div>
          <div className="flex justify-between px-4">
            <p className="text-xs font-semibold text-[#5d5d5d] dark:text-[#d3d3d3]">
              Email
            </p>
            <p className="text-xs text-[#7a7a7a]">ayaz@gmail.com</p>
          </div>
          <div className="flex justify-between px-4">
            <p className="text-xs font-semibold text-[#5d5d5d] dark:text-[#d3d3d3]">
              LinedIn
            </p>
            <p className="text-xs text-[#7a7a7a]">
              https://linkedin.com/imriyaz
            </p>
          </div>
          <div className="flex justify-between px-4">
            <p className="text-xs font-semibold text-[#5d5d5d] dark:text-[#d3d3d3]">
              Company Name
            </p>
            <p className="text-xs text-[#7a7a7a]">Unknown</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeadDetailCard;
