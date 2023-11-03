import React, { useContext,useState } from "react";
import StatisticWidget from "../../components/Widget/Statistic.jsx";
import AdAchievementWidget from "../../components/Widget/AdAchievment.jsx";
import DashboardHeader from "../../components/Other/DashboardHeader.jsx";
import AdScrolledCard from "../../components/Widget/AdScrolledCard.jsx";
import { useOutletContext } from "react-router-dom";
import { UserContext } from "../../context/userContext.js";
import axios from '../../api/axios.js'

function AdProfile({ ...props }) {
  // const user = useContext(UserContext);
  // console.log(user);

  const avatar = ""
    // user.user.img_source;

  const dataOS = [
    {
      title: "Kết nối máy in",
      date: "22/10/2023",
      id: "C06F201",
      color: "cardInfo",
    },
    {
      title: "Cập nhật thông tin máy in",
      date: "20/10/2023",
      id: "B10F201",
      color: "cardWarning",
    },
    {
      title: "Ngắt kết nối máy in",
      date: "20/10/2023",
      id: "C06F202",
      color: "cardInfo",
    },
    {
      title: "Ngắt kết nối máy in",
      date: "19/10/2023",
      id: "C06F201",
      color: "cardDanger",
    },
    {
      title: "Xóa máy in",
      date: "15/10/2023",
      id: "A04F201",
      color: "cardLime",
    }
  ];

  const [sidebarToggle] = useOutletContext();

  return (
    <>
      <main className="h-full">
        {/* Welcome Header */}
        <DashboardHeader
          toggle={sidebarToggle}
          avatar={avatar}
          user={{ name: "Admin" }}
        />

        {/* Laba */}
        <div className="px-2 mx-auto mainCard">
          <div className="w-full overflow-hidden text-slate-700 md:grid gap-4 grid md:grid-cols-6">
            <StatisticWidget className="col-span-4 col-start-1 bg-white" />
            <AdAchievementWidget />
          </div>
        </div>

        {/* OS Kredit */}
        <div className="px-2 mx-auto mainCard">
          <div className="flex flex-row gap-x-4 overflow-hidden overflow-x-auto justify-between no-scrollbar">
            {dataOS?.map((data, index) => (
              <AdScrolledCard key={index} data={data} />
            ))}
          </div>

          <div className="lg:w-full w-[1024px] overflow-hidden flex flex-row justify-between text-slate-700 gap-2 lg:max-h-screen overflow-x-auto whitespace-nowrap"></div>
        </div>
      </main>
    </>
  );
}

export default AdProfile;
