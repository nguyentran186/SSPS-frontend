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
      key: "email",
      label: "Email",
    },
    {
      key: "name",
      label: "Tên",
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
      stu_id: 2153637,
      email: "mamahdedeh34@gmail.com",
      name: "Indah Sari Devi",
      roles: [{ name: "User" }],
    },
    {
      stu_id: 2153637,
      email: "mamahdedeh34@gmail.com",
      name: "Indah Sari Devi",
      roles: [{ name: "User" }],
    },
    {
      stu_id: 2153637,
      email: "mamahdedeh34@gmail.com",
      name: "Indah Sari Devi",
      roles: [{ name: "User" }],
    },
    {
      stu_id: 2153637,
      email: "mamahdedeh34@gmail.com",
      name: "Indah Sari Devi",
      roles: [{ name: "User" }],
    },
    {
      stu_id: 2153637,
      email: "mamahdedeh34@gmail.com",
      name: "Indah Sari Devi",
      roles: [{ name: "User" }],
    },
    {
      stu_id: 2153637,
      email: "mamahdedeh34@gmail.com",
      name: "Indah Sari Devi",
      roles: [{ name: "User" }],
    },
    {
      stu_id: 2153637,
      email: "mamahdedeh34@gmail.com",
      name: "Indah Sari Devi",
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
