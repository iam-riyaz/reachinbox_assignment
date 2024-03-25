import React from "react";
import EmailList from "./EmailList";

function AllEmailPage() {
  return (
    <div>
      <div className=" h-screen">
        {/* email list */}
        <div className="flex flex-col">
          <EmailList />
        </div>

        {/* content view section */}
        <div></div>

        {/* right side widgets */}
        <div></div>
      </div>
    </div>
  );
}

export default AllEmailPage;
