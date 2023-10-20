import React from "react";
import Navbar from "../../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";

function PrLog() {
  const [sidebarToggle] = useOutletContext();
  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />

        {/* Main Content */}
        <div className="mainCard">Blank Page</div>
      </main>
    </>
  );
}

export default PrLog;
