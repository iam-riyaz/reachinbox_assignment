import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function ReplyBox() {
  const [isReplyActive, setIsReplyActive] = useState(false);
  const fromEmail = JSON.parse(localStorage.getItem("fromEmail"));
  const toEmail = JSON.parse(localStorage.getItem("toEmail"));
  const [searchParams, setSearchParams] = useSearchParams();
  const [threadId, setThreadId] = useState(searchParams.get("threadId"));

  const [formData, setFormData] = useState({
    toEmail: toEmail,
    fromEmail: fromEmail,
    subject: "",
    bodyEmail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleSend();
  };

  const openningReplyBox = () => {
    setIsReplyActive(!isReplyActive);
  };

  const handleSend = () => {
    setIsReplyActive(!isReplyActive);

    const token = JSON.parse(localStorage.getItem("token"));

    const requestBody = {
      form: formData.fromEmail,
      to: formData.toEmail,
      subject: formData.subject,
      body: formData.bodyEmail,
    };

    axios
      .post(
        `https://hiring.reachinbox.xyz/api/v1/onebox/reply/${threadId}`,
        requestBody,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

      alert("Reply sent succssfully")

  };


  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "r" || event.key === "R") {
        openningReplyBox();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);



  return (
    <div>
      <div
        onClick={openningReplyBox}
        className=" w-[136px] h-[40px] cursor-pointer    rounded flex justify-center items-center bg-gradient-to-r from-blue-700 to-blue-900 gap-4"
      >
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

      {isReplyActive ? (
        <div>
          {/* <!-- Main modal --> */}
          <div className=" overflow-y-scroll  no-scrollbar fixed bottom-4 z-10  justify-center items-center w-[867px]   ">
            <div className="  w-full h-full ">
              {/* whole form */}
              <form onSubmit={handleSubmit}>
                {/* <!-- Modal content --> */}
                <div className=" bg-white rounded shadow dark:bg-[#141517] h-[496px] border dark:border-[#414040] border-[#e0e0e0]">
                  {/* <!-- Modal header --> */}
                  <div className=" h-[38px] flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 dark:bg-[#23272C] bg-[#eeeeee]">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                      Reply
                    </h3>
                    <button
                      type="button"
                      onClick={openningReplyBox}
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                  {/* <!-- Modal body --> */}
                  <div className="  h-[400px]">
                    {/* input box */}
                    <div className=" border-b dark:border-[#313131]">
                      <div className="flex px-5 py-1">
                        <label
                          className="dark:text-[#6f6f6f] text-[#bbb]"
                          htmlFor=""
                        >
                          To :
                        </label>
                        <input
                          value={formData.toEmail}
                          onChange={handleChange}
                          name="toEmail"
                          type="email"
                          className="  px-2  border-none flex-grow bg-transparent focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* input box */}
                    <div className=" border-b dark:border-[#313131]">
                      <div className="flex px-5 py-1">
                        <label
                          className="dark:text-[#6f6f6f] text-[#bbb]"
                          htmlFor=""
                        >
                          From :
                        </label>
                        <input
                          value={formData.fromEmail}
                          onChange={handleChange}
                          name="fromEmail"
                          type="email"
                          className=" px-2 border-none flex-grow bg-transparent focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* input box */}
                    <div className=" border-b dark:border-[#313131]">
                      <div className="flex px-5 py-1">
                        <label
                          className="dark:text-[#6f6f6f] text-[#bbb]"
                          htmlFor=""
                        >
                          Subject :
                        </label>
                        <input
                          onChange={handleChange}
                          name="subject"
                          type="text"
                          className=" px-2 border-none flex-grow bg-transparent focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* input box body */}
                    <div className=" pt-4">
                      <div className="flex px-5 py-1">
                        <textarea
                          onChange={handleChange}
                          name="bodyEmail"
                          style={{ resize: "none" }}
                          type="text"
                          className="block px-2  flex-grow  bg-transparent overflow-y-scroll no-scrollbar focus:outline-none h-64"
                        />
                      </div>
                    </div>
                  </div>
                  {/* <!-- Modal footer --> */}
                  <div className="flex items-center p-4 md:p-5 border-t  border-gray-200 rounded-b dark:border-gray-600 h-[54px] ">
                    <button
                      type="submit"
                      className="w-[136px] h-[40px] cursor-pointer    rounded flex justify-center items-center bg-gradient-to-r from-blue-700 to-blue-900 gap-4"
                    >
                      <p className="text-white">Send</p>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ReplyBox;
