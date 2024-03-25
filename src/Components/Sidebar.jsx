import React from "react";

import home from "../../public/home.svg";

function Sidebar() {
  return (
    <div>
      <div className="min-h-screen   w-[56px] border-r bg-[#ffffff] dark:bg-[#181818] flex flex-col justify-between  border-r-[#dad9d9] dark:border-r-gray-600">
        {/* company icon div */}
        <div className="flex justify-center  px-[8px] py-[12px] w-full h-[70px]">
          <img src="./reachInbox.svg" alt="" />
        </div>

        {/*navigation icons*/}
        <div className="flex-grow py-10">
          <div className=" flex flex-col items-center  gap-[32px]">
            <div>
              <img src="./home.svg" alt="" />
            </div>
            <div>
              <img src="./userSearch.svg" alt="" />
            </div>
            <div>
              <img src="./email.svg" alt="" />
            </div>
            <div>
              <img src="./sent.svg" alt="" />
            </div>
            <div>
              <img src="./view_list.svg" alt="" />
            </div>
            <div>
              <img src="./onebox.svg" alt="" />
            </div>
            <div>
              <img src="./bar_chart.svg" alt="" />
            </div>
          </div>
        </div>

        {/* profile avator */}
        <div className=" w-full flex justify-center">
          <img src="./userAvator.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
