import AllEmailPage from "../Components/AllEmailPage";
import BlankOnebox from "../Components/BlankOnebox";
import EmailList from "../Components/EmailList";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";

export const Home = () => {
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
