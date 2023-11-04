import React, { useState } from "react";
import Navbar from "../../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";
import LogTable from "./LogTable";

function PrLog() {
  const [sidebarToggle] = useOutletContext();
  const [loading] = useState(false);
  const dataHeader = [
    {
      key: "id",
      label: "Order",
    },
    {
      key: "file_name",
      label: "Tên file",
    },
    {
      key: "time",
      label: "Thời gian",
    },
    {
      key: "size",
      label: "Kích thước",
    },
    {
      key: "quantity",
      label: "Số lượng",
    },
    {
      key: "delete",
      label: "Xóa",
    },
  ];
  const handleDelete = () => { };
  const data = [
    {
      id: 1,
      file_name: "A",
      time: "29/10/2023",
      size: "100MB",
      quantity: 1,
    },
    {
      id: 2,
      file_name: "B",
      time: "27/10/2023",
      size: "82MB",
      quantity: 5,
    },
    {
      id: 3,
      file_name: "C",
      time: "19/9/2023",
      size: "1GB",
      quantity: 2,
    },
    {
      id: 4,
      file_name: "D",
      time: "5/8/2023",
      size: "1,2GB",
      quantity: 10,
    },
    {
      id: 5,
      file_name: "E",
      time: "22/12/2022",
      size: "5MB",
      quantity: 9,
    },
    {
      id: 6,
      file_name: "F",
      time: "07/01/2020",
      size: "55KB",
      quantity: 123,
    },
    {
      id: 7,
      file_name: "G",
      time: "28/07/2003",
      size: "88MB",
      quantity: 22,
    },
  ];
  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />
        {/* Main Content */}
        <div className="mainCard">
          <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">
          <LogTable
              loading={loading}
              dataHeader={dataHeader}
              data={data}
              handleDelete={handleDelete}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default PrLog;
