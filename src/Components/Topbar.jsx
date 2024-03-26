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
        localStorage.setItem("darkMode", isDarkMode);
      }, [isDarkMode]);


  return (
    <div>
      <div className="h-[64px] border dark:border-[#6b6b6b71]  border-[#dedede] w-full bg-[#f4f4f4] dark:bg-[#232323] flex justify-between items-center">
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
      </div>
    </div>
  );
}

export default Topbar;
