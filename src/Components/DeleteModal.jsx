import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { deleteEmail } from "../Redux/slice";

function DeleteModal({ handleShowDeleteBox }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [threadId, setThreadId] = useState(searchParams.get("threadId"));

  const dispatch = useDispatch();

  const handleDelete = () => {
    const token = JSON.parse(localStorage.getItem("token"));

    axios
      .delete(
        `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        console.log(res);

        dispatch(deleteEmail(threadId));
      })
      .catch((err) => {
        console.log(err);
      });

    handleShowDeleteBox();
  };

  return (
    <div>
      <div onClick={handleShowDeleteBox} className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#00000081] z-90 ">
        <div style={{zIndex:"99999999999"}} className="w-[443px] opacity-100  h-[249px] border border-[#bbb] dark:border-[#313030] rounded bg-[#f6f6f6] dark:bg-[#060606] flex flex-col justify-center items-center ">
          <p className="text-2xl font-bold my-5">Are you sure ?</p>
          <p className="text-[13px] text-[#bbb]">
            {" "}
            Your selected email will be deleted.
          </p>

          <div className="flex justify-between gap-5 my-10">
            <div
              onClick={handleShowDeleteBox}
              className="rounded py-2 px-8 border border-[#bbb] bg-[#e4e4e4] dark:border-[#2b2b2b] dark:bg-[#1a1a1a] cursor-pointer"
            >
              Cancel
            </div>
            <div
              onClick={handleDelete}
              className="rounded py-2 px-8 border border-[#bbb] bg-gradient-to-r to-[#a91919] from-[#fa5252] dark:border-[#2c2c2c] text-white cursor-pointer"
            >
              Delete
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
