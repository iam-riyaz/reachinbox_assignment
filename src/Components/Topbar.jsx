import React, { useEffect, useState } from "react";

function Topbar() {


    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "true";
      });


      const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
        document.documentElement.classList.toggle("dark");
      };
    
      useEffect(() => {
        document.documentElement.classList.toggle("dark", isDarkMode);
      }, [isDarkMode]);


  return (
    <div>
      <div className="h-[64px] border dark:border-[#6b6b6b71]  border-[#dedede] w-full bg-[#dedede3d] dark:bg-[#343a405f] flex justify-between items-center">
        <div className="px-[32px]">
          <p className="font-bold text-[16px] text-[#5b5f66] dark:text-[#e7e7e7]">
            Onebox
          </p>
        </div>

        <div className="flex  gap-[22px] h-[24px] mx-10">
          {/* toggle button */}

          {isDarkMode?<div onClick={toggleDarkMode} className="flex border border-gray-500  w-[51px] h-full rounded-[80px] justify-between items-center cursor-pointer">
                <div  className="rounded-full h-4 w-4 m-1 bg-gray-400 ">
                    
                </div>
                <div className="rounded-full m-1">
                <img src="./light_mode.svg" alt="" />
                </div>
          </div>:
          <div onClick={toggleDarkMode} className="flex border border-gray-300 bg-[#e9e8e8]  w-[51px] h-full rounded-[80px] justify-between items-center cursor-pointer ">
                <div className="rounded-full m-1">
                <img src="./dark_mode.svg" alt="" />
                </div>
                <div  className="rounded-full h-4 w-4 m-1 bg-gray-400 ">
                    
                </div>
                
          </div>}
          {/* __________________ */}

          <div className="flex gap-1 items-center">
            <p className="text-[14px] font-semibold ">Riyaz's Workspace</p>
            <img className="h-[14px] text-back" src="./arrow_back.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
