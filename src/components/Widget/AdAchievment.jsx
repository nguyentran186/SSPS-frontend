import React from "react";

function Achievement() {
  return (
    <div className="widgetCard relative hidden md:flex col-span-2 px-6 py-4 text-center flex-col justify-between bg-cyan-700 text-slate-50">
      <div className="font-semibold text-slate-800 bg-white max-w-fit mx-auto pt-5 pb-2 px-6 absolute -top-3 rounded-lg left-1/2 -translate-x-1/2 whitespace-nowrap">
        Thống kê
      </div>
      <div className="font-semibold m-auto pt-4">
        <span className="text-lg lg:text-[40px]">20  </span>
        <span className="text-lg lg:text-[30px]">lượt đăng nhập trong 1 giờ qua</span>
      </div>
      <div className="font-semibold m-auto pt-4">
        <span className="text-lg lg:text-[40px]">10  </span>
        <span className="text-lg lg:text-[30px]">nhân viên đang hoạt động</span>
      </div>
    </div>
  );
}

export default Achievement;
