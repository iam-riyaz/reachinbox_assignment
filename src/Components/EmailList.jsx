import React from "react";
import EmailCard from "./EmailCard";

function EmailList() {
  return (
    <div className="  flex-grow   scroll-w top-[65px] left-[71px]  ">
      <div style={{height: "calc(100vh - 64px)"}} className="w-[278px]  mx-[8px] overflow-y-auto no-scrollbar    scrollbar-hidden ">
        <div>
          {/* topsection */}
          <div>
            <div className="flex justify-between items-center ">
              <div className=" min-w-[171px] h-[47px] flex justify-center items-center ">
                <div className="flex w-[160px] items-center gap-1">
                  <p className=" text-[20px] font-bold text-[#4285f4]">
                    All Inbox(s){" "}
                  </p>
                  <img className="h-3 " src="./down_arrow_blue.svg" alt="" />
                </div>
              </div>

              <div className="h-[32px] mr-2 w-[32px] bg-[#e2e1e1] dark:bg-[#242424] flex justify-center rounded ">
                <span className="font-semibold text-xl text-gray-600 dark:text-gray-200">
                  ⟳
                </span>
              </div>
            </div>

            <div className="mx-[8px]">
              <span className="font-bold text-[14px]">25/25 </span>
              <span className="text-gray-400 font-normal">
                Inboxes selected
              </span>
            </div>
          </div>

          {/* search and sort */}
          <div className="w-[275px] ">
            {/* search */}
            <div className="p-[8px]  h-[50px]  ">
              <div className="flex justify-center rounded border border-[#b8b8b8] dark:border-[#545454] dark:bg-[#2f2f2f] items-center w-[259px] h-[28px]">
                <img
                  src="./search.svg"
                  style={{ fill: "#666666" }}
                  className="h-6 p-1"
                  alt=""
                />

                <input
                  type="text"
                  className=" focus:outline-none w-[259px] h-[28px] rounded-r border-y border-r border-[#b8b8b8] dark:border-[#545454] dark:bg-[#2f2f2f] "
                  placeholder="Search"
                />
              </div>
            </div>
            {/* sort and unread section */}
            <div className="w-full flex items-center h-[32px]  px-[8px] ">
              <div className="flex w-full justify-between items-center">
                {/* new replies */}
                <div className="flex justify-start gap-1 items-center">
                  <div className="flex items-center justify-center rounded-xl w-[34px] h-[26px] bg-[#9b9a9a6d] ">
                    <span className="text-[#5c7cfa] text-sm font-semibold">
                      26
                    </span>
                  </div>
                  <span className="font-semibold text-sm">New Replies</span>
                </div>
                {/* sort */}
                <div className="w-[79px] cursor-pointer flex justify-between items-center text-sm font-semibold h-[20px]">
                  <span>Newest </span>
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

          {/* main list */}
          <div className="flex flex-col justify-center items-center mt-[8px] gap-[2px]">
            <EmailCard />
            <EmailCard/>
            <EmailCard/>
            <EmailCard/>
            <EmailCard/>
            <EmailCard/>
            <EmailCard/>
            <EmailCard/>
            <EmailCard/>
            <EmailCard/>
            <EmailCard/>
            <EmailCard/>
            <EmailCard/>
            <EmailCard/>
            <EmailCard/>
            <EmailCard/>

            <EmailCard/>

          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailList;
