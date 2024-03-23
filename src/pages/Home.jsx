import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";

export const Home = () => {

    


  return (
    <>
      <div className="flex ">
        {/* sidebar */}
        <div>
          <Sidebar />
        </div>
        {/* right side main content */}
        <div className="flex-grow">
          <div className="flex flex-col">
                <Topbar />
                {/* main contant */}
                <div></div>
          </div>
        </div>
      </div>
    </>
  );
};
