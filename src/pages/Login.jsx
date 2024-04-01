import React, { useEffect } from "react";
import ModeToggle from "../Components/ModeToggle";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {

    window.location.href =
      "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://reachinbox-assignment-riyaz.vercel.app/";
  };

  useEffect(() => {
    const extractTokenFromUrl = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get("token");
        
      if (token) {
        localStorage.setItem("token", JSON.stringify(token))
   
        navigate("/home");
      }
    };

    extractTokenFromUrl();
  }, []);

  return (
    <div className="h-screen min-h-[663px] flex flex-col justify-between">
      {/* header */}
      <div className="flex justify-center items-center border-b h-[64px] w-full  border-[#7d81918a] space-x-1 ">
        <div className="h-[24px] flex justify-center items-center space-x-1 ">
          <img src="https://app.reachinbox.ai/assets/logo.svg" alt="" />
          <p className="font-semibold text-lg">REACHINBOX</p>
        </div>
      </div>

      {/* main content */}
      <div className="h-[663px] w-full flex justify-center items-center flex-grow">
        <div className="border dark:bg-[#3d3c3c3e] bg-[#f2efef64] dark:border-[#918d8d63] w-[460px] h-[312px] rounded-[17px] px-[40px] pt-[24px] pb-[40px] ">
          <div className="flex flex-col gap-[40px]">
            <div className="flex flex-col justify-center items-center h-[103px] gap-[24px]">
              <p className="text-center font-semibold text-xl leading-[31px] dark:text-gray-300">
                Create a new account
              </p>
              <div
                onClick={handleLogin}
                className="py-lg px-2xl rounded border dark:border-[#888888ac] flex justify-center items-center align-bottom w-[380px] h-[48px] cursor-pointer bg-[#52515120] "
              >
                <div className="flex justify-center items-center w-[180px] gap-[12px]">
                  <svg
                    width="17"
                    height="22"
                    viewBox="0 0 17 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.5008 11.1808C16.5008 10.6226 16.4488 10.0857 16.3524 9.57031H8.66406V12.616H13.0574C12.8681 13.6002 12.293 14.4341 11.4284 14.9924V16.9678H14.0667C15.6103 15.5971 16.5008 13.5786 16.5008 11.1808Z"
                      fill="#4285F4"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.66206 18.8697C10.8661 18.8697 12.714 18.1647 14.0647 16.9622L11.4264 14.9866C10.6954 15.459 9.76038 15.7382 8.66206 15.7382C6.53599 15.7382 4.73626 14.3531 4.09426 12.4922H1.36719V14.5321C2.71032 17.1053 5.47095 18.8697 8.66206 18.8697Z"
                      fill="#34A853"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.09547 12.4929C3.9322 12.0205 3.8395 11.5158 3.8395 10.9969C3.8395 10.478 3.93229 9.97339 4.09556 9.50098V7.46094H1.3683C0.796853 8.55814 0.499502 9.76911 0.500001 10.9969C0.500001 12.2674 0.815375 13.4699 1.3683 14.5329L4.09547 12.4929Z"
                      fill="#FBBC05"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.66217 6.25648C9.86072 6.25648 10.9367 6.65374 11.7828 7.43401L14.1241 5.1757C12.7104 3.90518 10.8625 3.125 8.66217 3.125C5.47104 3.125 2.71041 4.88937 1.36719 7.46261L4.09435 9.50256C4.73635 7.64152 6.53599 6.25648 8.66217 6.25648Z"
                      fill="#EA4335"
                    />
                  </svg>

                  <span className="text-[16px] dark:text-[#b7b7b7cd]">
                    Sign Up with Google
                  </span>
                </div>
              </div>
            </div>
            <div className="h-[97px] flex flex-col items-center gap-[24px]">
              <button className="px-[35px] py-[13px] bg-gradient-to-r text-sm font-semibold  from-blue-700 to-blue-900 text-white rounded ">
                Create Account
              </button>
              <p className="text-[#909296] leading-6">
                Already have an account?{" "}
                <span className="text-[#c1c2c5] cursor-pointer">Sign In</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*  footer */}
      <div className="h-[32px] dark:bg-[#121212] bg-[#f0ececaa] gap-[10px] flex justify-center items-center flex-shrink-0">
        <p className="font-xs text-[#5c5f66]">
          © 2023 Reachinbox. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Login;
