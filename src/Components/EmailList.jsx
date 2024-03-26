import React, { useEffect, useState } from "react";
import EmailCard from "./EmailCard";
import { useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Container } from "postcss";
import DeleteModal from "./DeleteModal";

function EmailList() {
  const [showOptions, setShowOptions] = useState(false);
  const [optionIndex, setOptionIndex] = useState(null);
  const [deleteBox, setDeleteBox] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const [isSeleceted, setIsSelected] = useState(searchParams.get("threadId"));

  const allEmail = useSelector((state) => state.allEmails);

  const navigate = useNavigate();

  const onSelect = (data) => {
    setIsSelected(data.threadId);
    setShowOptions(false);

    localStorage.setItem("fromEmail", JSON.stringify(data.fromEmail));
    localStorage.setItem("toEmail", JSON.stringify(data.toEmail));

    navigate({
      search: `?threadId=${data.threadId}`,
    });
  };

  const handleContextMenu = (e, index) => {
    setOptionIndex(index);
    console.log("working..........");
    setShowOptions(true);
    e.preventDefault(); // Prevent default right-click behavior
    // Show the custom context menu
    const contextMenu = document.getElementById("context-menu");

    contextMenu.style.top = `${e.clientY}px`;
    contextMenu.style.left = `${e.clientX}px`;
  };

  const handleClickOutside = () => {
    // Hide the context menu when clicking outside
    const contextMenu = document.getElementById("context-menu");
    contextMenu.classList.remove("block");
    setShowOptions(false);
  };

  const handleShowDeleteBox = () => {
    setDeleteBox(!deleteBox);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "d" || event.key === "D") {
        setDeleteBox(true);
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div
      onClick={handleClickOutside}
      className="  flex-grow   scroll-w top-[65px] left-[71px]  "
    >
      <div
        style={{ height: "calc(100vh - 64px)" }}
        className="w-[278px]  mx-[8px] overflow-y-auto no-scrollbar    scrollbar-hidden "
      >
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
                      {allEmail.length}
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
            {allEmail.map((data, index) => {
              return (
                <div
                  onContextMenu={(e) => handleContextMenu(e, index)}
                  onClick={() => onSelect(data)}
                  className={
                    isSeleceted == data.threadId
                      ? "dark:bg-[#111111] bg-[#f3f3f3]"
                      : null
                  }
                >
                  <EmailCard data={data} />
                  {/* Custom context menu */}
                  <div
                    id="context-menu"
                    className={
                      showOptions && index == optionIndex
                        ? "absolute z-50 dark:bg-[#151515] bg-[#e2e2e2] border dark:border-[#2a2929] border-gray-200 p-1 "
                        : "hidden"
                    }
                    onClick={handleClickOutside}
                  >
                    <ol>
                      <li className=" dark:border-[#3c3c3c] border-[#c9c9c9] cursor-pointer p-1 hover:dark:bg-[#353535]">
                        Mark as Unread{" "}
                      </li>
                      <li className=" dark:border-[#3c3c3c] border-[#c9c9c9] cursor-pointer p-1 hover:dark:bg-[#353535]">
                        Edit Lead{" "}
                      </li>
                      <li className=" dark:border-[#3c3c3c] border-[#c9c9c9] cursor-pointer p-1 hover:dark:bg-[#353535]">
                        Set Reminder{" "}
                      </li>
                      <li
                        onClick={() => setDeleteBox(true)}
                        className=" dark:border-[#3c3c3c] border-[#c9c9c9] cursor-pointer p-1 hover:dark:bg-[#353535]"
                      >
                        Delete{" "}
                      </li>
                    </ol>
                  </div>
                </div>
              );
            })}
          </div>

          {/* delete box */}
          {deleteBox ? (
            <DeleteModal handleShowDeleteBox={handleShowDeleteBox} />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default EmailList;
