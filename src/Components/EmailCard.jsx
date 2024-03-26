import moment from "moment";
import React, { useEffect, useState } from "react";

function EmailCard({data}) {

   let {fromEmail,subject,createdAt} = data

   const [customSubject, setCustomSubject]= useState(subject)

   const [createdTime, setCreatedTime]= useState(createdAt)


   function truncateString(str) {
    if (str.length > 20) {
      return str.substring(0, 35) + '...';
    } else {
      return str;
    }
  }

  useEffect(()=>{
    setCustomSubject(truncateString(subject))
    setCreatedTime(moment(createdTime).format("MMMM D"))
  
  },[subject, createdTime])

   
  return (
    <div>
      <div className="w-[255px] h-[100px] py-[12px] px-[8px] dark:border-t border-t-[#525252] dark:border-b dark:border-b-[#111111] border-b-[#cfcfcf] cursor-pointer dark:hover:bg-[#111111] hover:bg-[#f3f3f3]">
        <div>
          <div className="flex justify-between w-full">
            <p className="font-semibold text-[14px] overflow-hidden">{fromEmail}</p>
            <p className="text-[12px] text-[#666666a8]">{createdTime}</p>
          </div>
          <p className="text-sm text-[#999999] leading-[18px] overflow-hidden">
           {customSubject}
          </p>

          <div className="flex gap-4 pt-[6px]">
            {/* lead status */}
            <div className="px-[8px] py-[3px] dark:bg-[#5e5e5ea5] bg-[#e0dede]  dark:text-[#57e0a6] text-[#46c18d] text-[10px] rounded-[17px] flex items-center gap-1 font-semibold tracking-wider">
              <div className="w-[8px] h-[8px]  rounded-full dark:bg-[#57e0a6] bg-[#46c18d]"></div>
              Intrested
            </div>
            {/* campaingn name */}
            <div className="px-[8px] py-[3px] dark:bg-[#5e5e5ea5] bg-[#e0dede]   text-[10px] rounded-[17px] flex items-center gap-1 font-semibold tracking-wider">
              <img src="./sent.svg" className="h-3" alt="" />
              Campaign name
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailCard;
