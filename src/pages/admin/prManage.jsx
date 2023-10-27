import React, { useState } from "react";
import Navbar from "../../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";
import MinhTable from "./MinhTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AddMinh from "../../components/Modal/AddMinh";
function PrManage() {
  const [sidebarToggle] = useOutletContext();
  const [loading] = useState(false);

  const dataHeader = [
    {
      key: "stu_id",
      label: "Mã số máy in",
    },
    {
      key: "email",
      label: "Nhãn hiệu",
    },
    {
      key: "model",
      label: "Mẫu máy in",
    },
    {
      key: "description",
      label: "Miêu tả",
    },
    {
      key: "base",
      label: "Cơ sở",
    },
    {
      key: "building",
      label: "Tòa",
    },
    {
      key: "room",
      label: "Phòng",
    },
    {
      key: "role",
      label: "Tình trạng",
    },
    {
      key: "action",
      label: "Chỉnh sửa",
    },
  ];

  const handleDelete = () => { };
  const data = [
    {
      printer_id: 1000001,
      brand: "Canon",
      model: "PIXMA GM2070",
      description: "In laser trắng đen, in 2 mặt tự động",
      base: "1",
      building: "A4",
      room: "402",
      roles: [{ name: "Đang hoạt động" }],
    },
    {
      printer_id: 1000002,
      brand: "Brother",
      model: "PIXMA GM2070",
      description: "In laser trắng đen, in 2 mặt tự động",
      base: "1",
      building: "A4",
      room: "402",
      roles: [{ name: "Đang hoạt động" }],
    },
    {
      printer_id: 1000003,
      brand: "HP",
      model: "PIXMA GM2070",
      description: "In laser trắng đen, in 2 mặt tự động",
      base: "1",
      building: "A4",
      room: "402",
      roles: [{ name: "Đã tắt" }],
    },
    {
      printer_id: 1000004,
      brand: "HP",
      model: "PIXMA GM2070",
      description: "In laser trắng đen, in 2 mặt tự động",
      base: "1",
      building: "A4",
      room: "402",
      roles: [{ name: "Đang hoạt động" }],
    },
  ];
  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />

        {/* Main Content */}
        <div className="mainCard">
          <AddMinh/>
          <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">
            <MinhTable
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

export default PrManage