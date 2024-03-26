import React from "react";
import ThreadTopbar from "./ThreadTopbar";
import TimeLineTag from "./TimeLineTag";
import EmailViewCard from "./EmailViewCard";

function EmailsViewSection() {
  return (
    <div>
      <ThreadTopbar />
      <div>
        <div
          style={{ height: "calc(100vh - 70px - 64px)" }}
          className="overflow-y-scroll  no-scrollbar px-5 h-full  border-t border-[#dedede] dark:border-[#3b3b3b] "
        >
          {/*email view list  */}
          <div className="mt-5">
            <TimeLineTag />
            {/* main full email view cards */}
            <EmailViewCard />
            <EmailViewCard />
            
            

                 

            {/* Reply btn */}
            <div className="py-5">
              <div className=" w-[136px] h-[40px] cursor-pointer    rounded flex justify-center items-center bg-gradient-to-r from-blue-700 to-blue-900 gap-4">
                <svg
                  width="18"
                  height="16"
                  className="text-white"
                  viewBox="0 0 18 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 4.5V0.5L0 7.5L7 14.5V10.4C12 10.4 15.5 12 18 15.5C17 10.5 14 5.5 7 4.5Z"
                    fill="currentColor"
                  />
                </svg>
                <p className="text-white">Reply</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailsViewSection;
