import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";

export const Home = () => {
  return (
    <>
      <div className="flex ">
        {/* sidebar */}
        <div className="">
          <Sidebar />
        </div>
        {/* right side main content */}
        <div className="flex-grow">
          <div className="flex flex-col  min-w-[1383px]">
            <Topbar />
          </div>
          {/* main contant */}
          <div className="w-full min-h-[693px]  flex flex-col justify-center items-center ">
           
            <img src="./No_Message.svg" alt="" />
            <p className="text-[24px] font-bold leading-10 my-5">It’s the beginning of a legendary sales pipeline </p>
            <p className="leading-[27.4px] w-[289px] text-center text-[18px] text-[#9e9e9e]">When you have inbound E-mails you’ll see them here</p>
          </div>
        </div>
      </div>
    </>
  );
};
