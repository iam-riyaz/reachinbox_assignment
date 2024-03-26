import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function ThreadTopbar() {

 
  return (
    <div className="w-full  h-[70px]   ">
      <div className="flex justify-between h-full px-[17px] gap-[8px] items-center">
        {/* left div (sender name & email) */}
        <div className="w-[422px] h-[46px] ">
          <p className="font-semibold text-sm dark:text-[#dddddd] text-[#2d2d2d] leading-[20px] ">
          Shaw Adley
          </p>
          <p className="text-[#767676a1] text-xs  ">shaw@getmemeetings.com</p>
        </div>

        {/* right div ( status and options) */}
        <div className="w-[328px] h-[33px]  flex items-center justify-between ">
          <div className="h-full flex gap-4">
            {/* first btn div */}
            <div className="flex justify-between items-center cursor-pointer h-full border dark:border-[#555454] dark:bg-[#24282c] border-[#e6e6e6] rounded  px-[16px]">
              <div className="h-[10px] w-[10px] rounded-full border-2 border-[#6a6a6aaf] mr-1 bg-yellow-400">
                {" "}
              </div>
              <p className=" text-sm font-semibold dark:text-gray-300 text-gray-700">
                Meeting completed
              </p>
              <svg
                class="-mr-1 h-5 w-5 text-gray-700 dark:text-gray-300"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            {/* second btn div */}
            <div className="flex cursor-pointer justify-between items-center h-full border dark:border-[#555454] dark:bg-[#24282c] border-[#e6e6e6] rounded  px-[16px]">
              <p className=" text-sm font-semibold dark:text-gray-300 text-gray-700">
                More
              </p>
              <svg
                class="-mr-1 h-5 w-5 text-gray-700 dark:text-gray-300"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>

          {/* three dot btn */}
          <div className="flex cursor-pointer justify-center items-center h-full border dark:border-[#555454] dark:bg-[#24282c] border-[#e6e6e6] rounded w-[33px] pb-[10px]">
            <p className="  text-sm font-bold dark:text-gray-300 text-gray-700">
              ...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThreadTopbar;
