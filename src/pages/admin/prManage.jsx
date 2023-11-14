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
      key: "print_id",
      label: "Mã số máy in",
    },
    {
      key: "brand",
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
      printer_id: "A04F301",
      brand: "Canon",
      model: "PIXMA GM2070",
      description: "In phun trắng đen, in 2 mặt tự động, in wifi",
      base: "1",
      building: "A4",
      room: "301",
      roles: [{ name: "Đang hoạt động" }],
    },
    {
      printer_id: "A04F302",
      brand: "Brother",
      model: "HL-L2321D",
      description: "In laser trắng đen, in 1-2 mặt tự động",
      base: "1",
      building: "A4",
      room: "302",
      roles: [{ name: "Đang hoạt động" }],
    },
    {
      printer_id: "A04F501",
      brand: "HP",
      model: "9YF82A",
      description: "In laser trắng đen, in 2 mặt tự động, in wifi",
      base: "1",
      building: "A4",
      room: "501",
      roles: [{ name: "Đang hoạt động" }],
    },
    {
      printer_id: "B01F201",
      brand: "HP",
      model: "4ZB78A",
      description: "In laser trắng đen, in 1 mặt, in wifi",
      base: "1",
      building: "B1",
      room: "201",
      roles: [{ name: "Đang hoạt động" }],
    },
    {
      printer_id: "B03F201",
      brand: "Brother",
      model: "HL-L2321D",
      description: "In laser trắng đen, in 1-2 mặt tự động",
      base: "1",
      building: "B3",
      room: "201",
      roles: [{ name: "Đã tắt" }],
    },
    {
      printer_id: "B04F201",
      brand: "HP",
      model: "4ZB78A",
      description: "In laser trắng đen, in 1 mặt, in wifi",
      base: "1",
      building: "B4",
      room: "201",
      roles: [{ name: "Đang hoạt động" }],
    },
    {
      printer_id: "B04F202",
      brand: "Canon",
      model: "PIXMA GM2070",
      description: "In phun trắng đen, in 2 mặt tự động, in wifi",
      base: "1",
      building: "B4",
      room: "202",
      roles: [{ name: "Đang hoạt động" }],
    },
    {
      printer_id: "B04F501",
      brand: "Canon",
      model: "PIXMA GM2070",
      description: "In phun trắng đen, in 2 mặt tự động, in wifi",
      base: "1",
      building: "B4",
      room: "202",
      roles: [{ name: "Đang hoạt động" }],
    },
    {
      printer_id: "B04F502",
      brand: "HP",
      model: "4ZB78A",
      description: "In laser trắng đen, in 1 mặt, in wifi",
      base: "1",
      building: "B4",
      room: "502",
      roles: [{ name: "Đang hoạt động" }],
    },
    {
      printer_id: "B10F201",
      brand: "Brother",
      model: "HL-L2321D",
      description: "In laser trắng đen, in 1-2 mặt tự động",
      base: "1",
      building: "B10",
      room: "201",
      roles: [{ name: "Đã tắt" }],
    },
    {
      printer_id: "C06F201",
      brand: "HP",
      model: "9YF82A",
      description: "In laser trắng đen, in 2 mặt tự động, in wifi",
      base: "1",
      building: "C6",
      room: "201",
      roles: [{ name: "Đã tắt" }],
    },
    {
      printer_id: "C06F202",
      brand: "Brother",
      model: "HL-L2321D",
      description: "In laser trắng đen, in 1-2 mặt tự động",
      base: "1",
      building: "C6",
      room: "202",
      roles: [{ name: "Đang hoạt động" }],
    }
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