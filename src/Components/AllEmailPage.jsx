import React, { useEffect, useState } from "react";
import EmailList from "./EmailList";
import RightSideWidgets from "./RightSideWidgets";
import EmailsViewSection from "./EmailsViewSection";
import { useSelector } from "react-redux";
import DeleteModal from "./DeleteModal";

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
        <EmailsViewSection />
        </div>

        {/* right side widgets */}
        <div >
            <RightSideWidgets/>
        </div>
        
      </div>
    </div>
  );
}

export default AllEmailPage;
