import React from "react";

function AdScrolledCard({ data, ...props }) {
  return (
    <div className={`scrolledCard ${data.color} text-slate-50 flex flex-col`}>
      <h1 className="pb-3 font-semibold">{data.title}</h1>
      <div className="text-medium">Ngày: {data.date}</div>
      <div className="text-medium">Mã số máy in: {data.id}</div>
    </div>
  );
}

export default AdScrolledCard