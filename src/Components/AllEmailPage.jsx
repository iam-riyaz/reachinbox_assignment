import React from "react";
import EmailList from "./EmailList";
import RightSideWedgets from "./RightSideWedgets";
import EmailsViewSection from "./EmailsViewSection";

function AllEmailPage() {
  return (
    <div>
      <div className=" flex w-full justify-between">
        {/* email list */}
        <div className="flex flex-col">
          <EmailList />
        </div>

        {/* content view section */}
        <div className=" flex-grow border-r border-l  border-[#dcdcdc] dark:border-[#343434]" >
        <EmailsViewSection/>
        </div>

        {/* right side widgets */}
        <div >
            <RightSideWedgets/>
        </div>
      </div>
    </div>
  );
}

export default AllEmailPage;
