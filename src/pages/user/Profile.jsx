import React, { useContext,useState } from "react";
import StatisticWidget from "../../components/Widget/Statistic.jsx";
import AchievementWidget from "../../components/Widget/Achievment.jsx";
import DashboardHeader from "../../components/Other/DashboardHeader.jsx";
import ScrolledCard from "../../components/Widget/ScrolledCard.jsx";
import { useOutletContext } from "react-router-dom";
import { UserContext } from "../../context/userContext.js";
import axios from '../../api/axios.js'

function Profile({ ...props }) {
  // const user = useContext(UserContext);
  // console.log(user);

  const avatar = ""
    // user.user.img_source;

  const dataOS = [
    {
      title: "Chapter6.pdf",
      date: "21/10/2023",
      size: "2.180",
      color: "cardInfo",
    },
    {
      title: "Report_SE_231.docx",
      date: "20/10/2023",
      size: "680",
      color: "cardWarning",
    },
    {
      title: "review.docx",
      date: "20/10/2023",
      size: "640",
      color: "cardDanger",
    },
    {
      title: "CC01.xlsx",
      date: "16/10/2023",
      size: "13",
      color: "cardSuccess",
    },
    {
      title: "presentation.pdf",
      date: "15/10/2023",
      size: "366",
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
          user={{ name: "Thạnh" }}
          // user={{ name: user.user.name }}
        />

        {/* Laba */}
        <div className="px-2 mx-auto mainCard">
          <div className="w-full overflow-hidden text-slate-700 md:grid gap-4 grid md:grid-cols-6">
            <StatisticWidget className="col-span-4 col-start-1 bg-white" />
            <AchievementWidget />
          </div>
        </div>

        {/* OS Kredit */}
        <div className="px-2 mx-auto mainCard">
          <div className="flex flex-row gap-x-4 overflow-hidden overflow-x-auto justify-between no-scrollbar">
            {dataOS?.map((data, index) => (
              <ScrolledCard key={index} data={data} />
            ))}
          </div>

          <div className="lg:w-full w-[1024px] overflow-hidden flex flex-row justify-between text-slate-700 gap-2 lg:max-h-screen overflow-x-auto whitespace-nowrap"></div>
        </div>
      </main>
    </>
  );
}

export default Profile;
