import React from "react";

function Achievement() {
  return (
    <div className="widgetCard relative hidden md:flex col-span-2 px-6 py-4 text-center flex-col justify-between bg-cyan-700 text-slate-50">
      <div className="font-semibold text-slate-800 bg-white max-w-fit mx-auto pt-5 pb-2 px-6 absolute -top-3 rounded-lg left-1/2 -translate-x-1/2 whitespace-nowrap">
        Còn
      </div>
      <div className="font-semibold m-auto pt-4">
        <span className="text-lg lg:text-[60px]">8  </span>
        <span className="text-lg lg:text-[30px]">trang A3 miễn phí</span>
      </div>
      <div className="font-semibold m-auto pt-4">
        <span className="text-lg lg:text-[60px]">2  </span>
        <span className="text-lg lg:text-[30px]">trang A4 miễn phí</span>
      </div>
    </div>
  );
}

export default Achievement;
