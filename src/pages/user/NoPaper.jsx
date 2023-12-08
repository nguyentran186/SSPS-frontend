import React, { useContext, useState, useRef, useEffect } from "react";
import Navbar from "../../components/Navbar/Index";
import AchievementWidget from "../../components/Widget/Achievment.jsx";
import { useOutletContext, Link } from "react-router-dom";
import axios from "../../api/axios.js"; //will need this for ACTUAL file uploading stuff
import Select from "react-select";

function No_paper({ ...props }) {
  const [sidebarToggle] = useOutletContext();

  return (
        <>
            <Navbar toggle={sidebarToggle} />
            <main className="h-full overflow-hidden">
                <div className="px-2 mx-auto mainCard h-full overflow-hidden">
                <div className="w-full text-slate-700 md:grid gap-4 grid md:grid-cols-7 h-full overflow-hidden">
                    <div className="h-full rounded-lg md:col-start-1 md:col-span-5 md:row-span-2 flex items-center justify-center overflow-hidden bg-green-200">
                    <div className="rounded-lg flex flex-col items-center justify-center overflow-hidden bg-green-200 p-5">
                        <div className="font-semibold flex flex-col items-center justify-center">
                        <span className="text-lg lg:text-[30px] mb-2 text-center">Số trang giấy còn lại của bạn không đủ!</span>
                        <span className="text-lg lg:text-[30px] mb-2 text-center">Bạn cần mua thêm 6 trang nữa với giá $2000.</span>
                        <span className="text-lg lg:text-[30px] mb-2 text-center">Bạn có muốn tiếp tục in tài liệu không?</span>
                        </div>
                    </div>
                    </div>

                    <div className="md:col-start-6 md:col-span-2 h-full overflow-hidden">
                    <AchievementWidget />
                    </div>
                    <Link
                    to="/user/printService"
                    className="md:col-start-4 md:col-span-1 md:row-start-3 bg-emerald-400 hover:bg-emerald-600 text-white font-bold rounded h-12 flex justify-center items-center"
                    >
                    Quay lại
                    </Link>
                    <Link
                    to="/user/selectPrinter"
                    className="md:col-start-5 md:col-span-1 md:row-start-3 bg-emerald-400 hover:bg-emerald-600 text-white font-bold rounded h-12 flex justify-center items-center"
                    >
                    Tiếp tục
                    </Link>
                </div>
                </div>
            </main>
        </>

  );
}

export default No_paper;
