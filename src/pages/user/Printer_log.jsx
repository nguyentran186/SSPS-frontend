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
      label: "STT",
    },
    {
      key: "print_id",
      label: "Mã số máy in",
    },
    {
      key: "file_name",
      label: "Tên file",
    },
    {
      key: "date",
      label: "Ngày in",
    },
    {
      key: "start_time",
      label: "Thời gian bắt đầu",
    },
    {
      key: "end_time",
      label: "Thời gian kết thúc",
    },
    {
      key: "size",
      label: "Kích thước",
    },
    {
      key: "paper",
      label: "Khổ giấy",
    },
    {
      key: "page",
      label: "Số trang",
    },
    {
      key: "quantity",
      label: "Số lượng",
    },
    {
      key: "delete",
      label: "Xóa",
    }
  ];
  const handleDelete = () => { };
  const data = [
    {
      id: 1,
      print_id: "A04F301",
      file_name: "presentation.pdf",
      date: "15/10/2023",
      start_time: "11:30 AM",
      end_time: "11:32 AM",
      size: "366KB",
      paper: "A3",
      page: 2,
      quantity: 1
    },
    {
      id: 2,
      print_id: "B10F201",
      file_name: "CC01.xlsx",
      date: "16/10/2023",
      start_time: "01:28 PM",
      end_time: "01:28 PM",
      size: "13KB",
      paper: "A4",
      page: 1,
      quantity: 2
    },
    {
      id: 3,
      print_id: "B04F502",
      file_name: "review.docx",
      date: "20/10/2023",
      start_time: "07:20:AM",
      end_time: "07:20 AM",
      size: "640KB",
      paper: "A4",
      page: 28,
      quantity: 1
    },
    {
      id: 4,
      print_id: "B04F502",
      file_name: "Report_SE_231.docx",
      date: "20/10/2023",
      start_time: "07:20 AM",
      end_time: "07:21 AM",
      size: "680KB",
      paper: "A4",
      page: 22,
      quantity: 1
    },
    {
      id: 5,
      print_id: "B01F201",
      file_name: "Chapter6.pdf",
      date: "21/10/2023",
      start_time: "03:46 PM",
      end_time: "03:50 PM",
      size: "2.180KB",
      paper: "A4",
      page: 40,
      quantity: 1
    }
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
