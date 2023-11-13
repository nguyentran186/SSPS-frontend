import React, { useContext,useState, useRef } from "react";
import Navbar from "../../components/Navbar/Index";
import StatisticWidget from "../../components/Widget/Statistic.jsx";
import AchievementWidget from "../../components/Widget/Achievment.jsx";
import ScrolledCard from "../../components/Widget/ScrolledCard.jsx";
import { useOutletContext } from "react-router-dom";
import { UserContext } from "../../context/userContext.js";
import axios from '../../api/axios.js'

import printIcon from "../../assets/images/printicon.svg";


function Print_service({ ...props }) {
  // const user = useContext(UserContext);
  // console.log(user);

  const fileInput = useRef(null);

  const handleButtonClick = (e) => {
    // trigger the file input click event
    fileInput.current.click();
  };

  const avatar = ""
    // user.user.img_source;

  const [sidebarToggle] = useOutletContext();

  return (
    <>
      <main className="h-full">
      <Navbar toggle={sidebarToggle} />  

        {/* Laba */}
        <div className="px-2 mx-auto mainCard h-full overflow-hidden">
          <div className="w-full text-slate-700 md:grid gap-4 grid md:grid-cols-6 h-full overflow-hidden">
          <div className="h-2/3 rounded-lg md:col-start-1 md:col-span-4 flex flex-col items-center justify-center overflow-hidden bg-green-200">
            <img src={printIcon} alt="Description of the image" className="mb-4" />
            <button onClick={handleButtonClick} className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded">
              Chọn các tệp
            </button>
            <input type="file" ref={fileInput} style={{ display: 'none' }} />
          </div>

            <div className="md:col-start-5 md:col-span-2 h-full overflow-hidden">
              <AchievementWidget />
            </div>
          </div>
        </div>

        {/* OS Kredit */}
        
      </main>
    </>
  );
}

export default Print_service;