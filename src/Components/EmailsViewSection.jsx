import React, { useEffect, useState } from "react";
import ThreadTopbar from "./ThreadTopbar";
import TimeLineTag from "./TimeLineTag";
import EmailViewCard from "./EmailViewCard";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import ReplyBox from "./ReplyBox";
import { useSelector } from "react-redux";
import LoadingSkeleton from "./LoadingSkeleton";
import BlankOnebox from "./BlankOnebox";

function EmailsViewSection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [threadId, setThreadId] = useState(searchParams.get("threadId"));
  const [isLoading,setIsLoading]= useState(true)

  const [allThreads, setAllThreads] = useState([]);

  useEffect(() => {
    setThreadId(searchParams.get("threadId"));
    setAllThreads([]);
    setIsLoading(true)
 
  }, [searchParams]);

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("token"));

    axios
      .get(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setAllThreads(res.data.data);
        setIsLoading(false)
      
      });
  }, [threadId]);

  return (
    <div>
      {threadId?<div>
      {!isLoading?
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
            {allThreads.map((data) => {
              return <EmailViewCard data={data} />;
            })}

            {/* Reply btn */}
            <div className="py-5">
              <ReplyBox />
            </div>
          </div>
        </div>
      </div>
      </div>:<LoadingSkeleton/>}
      </div>:<BlankOnebox/>}
    </div>
  );
}

export default EmailsViewSection;
