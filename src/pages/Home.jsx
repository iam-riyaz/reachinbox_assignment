import { useEffect, useState } from "react";
import AllEmailPage from "../Components/AllEmailPage";
import BlankOnebox from "../Components/BlankOnebox";
import EmailList from "../Components/EmailList";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addEmails } from "../Redux/slice";

export const Home = () => {
  const dispath = useDispatch();
  const emails = useSelector((state) => state.emails);

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("token"));

    const getList = async () => {
      try {
        let resetUser = await axios.get(
          "https://hiring.reachinbox.xyz/api/v1/onebox/reset",
          { headers: { Authorization: `Bearer ${token}` } }
        );

        console.log(resetUser.data);

        let response = await axios.get(
          "https://hiring.reachinbox.xyz/api/v1/onebox/list",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        dispath(addEmails(response.data.data));
      } catch (err) {
        console.log(err);
      }
    };

    getList()
  }, []);

  return (
    <>
      <div className="flex left-0 ">
        {/* sidebar */}
        <div className="fixed left-0 top-0 bottom-0">
          <Sidebar />
        </div>
        {/* right side main content */}
        <div className="flex-grow">
          <div className="flex flex-col fixed left-[56px] min-w-[1389px] right-0 ">
            <Topbar />
          </div>
          {/* main contant */}
          <div className="w-full  mt-[64px] pl-[56px]">
            {/* <BlankOnebox /> */}
            <AllEmailPage />
          </div>
        </div>
      </div>
    </>
  );
};
