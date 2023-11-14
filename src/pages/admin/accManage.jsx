import React, { useState } from "react";
import Navbar from "../../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";
import AdminTable from "./AminTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AddModal from "../../components/Modal/AddModal";

function AccManage() {
  const [sidebarToggle] = useOutletContext();
  const [loading] = useState(false);

  const dataHeader = [
    {
      key: "stu_id",
      label: "MSSV",
    },
    {
      key: "name",
      label: "Họ và tên",
    },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "role",
      label: "Phân quyền",
    },
    {
      key: "action",
      label: "Chỉnh sửa",
    },
  ];

  const handleDelete = () => { };
  const data = [
    {
      stu_id: 2152126,
      email: "khai.trinhxuan@hcmut.edu.vn",
      name: "Trịnh Xuân Khải",
      roles: [{ name: "User" }],
    },
    {
      stu_id: 2152668,
      email: "khoa.bui2807@hcmut.edu.vn",
      name: "Bùi Đăng Khoa",
      roles: [{ name: "User" }],
    },
    {
      stu_id: 2053214,
      email: "minh.hoangkhmtclc254@hcmut.edu.vn",
      name: "Hoàng Phan Ngọc Minh",
      roles: [{ name: "User" }],
    },
    {
      stu_id: 2153637,
      email: "nguyen.tran186@hcmut.edu.vn",
      name: "Trần Bảo Nguyên",
      roles: [{ name: "User" }],
    },
    {
      stu_id: 2152289,
      email: "thanh.phamhuynh2806@hcmut.edu.vn",
      name: "Phạm Huỳnh Quốc Thạnh",
      roles: [{ name: "User" }],
    },
    {
      stu_id: 2153915,
      email: "triet.nguyenminhbk2908@hcmut.edu.vn",
      name: "Nguyễn Minh Triết",
      roles: [{ name: "User" }],
    },
    {
      stu_id: 2153507,
      email: "triet.trancse21@hcmut.edu.vn",
      name: "Trần Minh Triết",
      roles: [{ name: "User" }],
    },
  ];
  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />

        {/* Main Content */}
        <div className="mainCard">
          <AddModal/>
          <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">
            <AdminTable
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

export default AccManage
