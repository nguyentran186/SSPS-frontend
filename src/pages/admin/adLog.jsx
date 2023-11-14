import React, { useState } from "react";
import Navbar from "../../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";
import AdLogTable from "./AdLogTable";

function AdLog() {
  const [sidebarToggle] = useOutletContext();
  const [loading] = useState(false);
  const dataHeader = [
    {
      key: "id",
      label: "STT",
    },
    {
      key: "user_name",
      label: "Họ và tên",
    },
    {
      key: "email",
      label: "Email",
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
      user_name: "Phạm Huỳnh Quốc Thạnh",
      email: "thanh.phamhuynh2806@hcmut.edu.vn",
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
      user_name: "Trần Bảo Nguyên",
      email: "nguyen.tran186@hcmut.edu.vn",
      print_id: "A04F301",
      file_name: "CHUONG1-4.pdf",
      date: "15/10/2023",
      start_time: "02:25 PM",
      end_time: "02:26 PM",
      size: "512KB",
      paper: "A4",
      page: 26,
      quantity: 1
    },
    {
      id: 3,
      user_name: "Trần Bảo Nguyên",
      email: "nguyen.tran186@hcmut.edu.vn",
      print_id: "B04F202",
      file_name: "BTL_Nhom6.docx",
      date: "16/10/2023",
      start_time: "09:10 AM",
      end_time: "09:11 AM",
      size: "623KB",
      paper: "A4",
      page: 45,
      quantity: 2
    },
    {
      id: 4,
      user_name: "Phạm Huỳnh Quốc Thạnh",
      email: "thanh.phamhuynh2806@hcmut.edu.vn",
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
      id: 5,
      user_name: "Trần Minh Triết",
      email: "triet.trancse21@hcmut.edu.vn",
      print_id: "B04F201",
      file_name: "review.docx",
      date: "17/10/2023",
      start_time: "01:48 PM",
      end_time: "01:49 PM",
      size: "16KB",
      paper: "A4",
      page: 4,
      quantity: 2
    },
    {
      id: 6,
      user_name: "Trần Bảo Nguyên",
      email: "nguyen.tran186@hcmut.edu.vn",
      print_id: "B04F201",
      file_name: "chap3.pdf",
      date: "17/10/2023",
      start_time: "02:45 PM",
      end_time: "02:46 PM",
      size: "402KB",
      paper: "A4",
      page: 20,
      quantity: 1
    },
    {
      id: 7,
      user_name: "Bùi Đăng Khoa",
      email: "khoa.bui2807@hcmut.edu.vn",
      print_id: "B04F201",
      file_name: "poster.pdf",
      date: "19/10/2023",
      start_time: "08:10 AM",
      end_time: "08:11 AM",
      size: "16KB",
      paper: "A3",
      page: 2,
      quantity: 1
    },
    {
      id: 8,
      user_name: "Phạm Huỳnh Quốc Thạnh",
      email: "thanh.phamhuynh2806@hcmut.edu.vn",
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
      id: 9,
      user_name: "Phạm Huỳnh Quốc Thạnh",
      email: "thanh.phamhuynh2806@hcmut.edu.vn",
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
      id: 10,
      user_name: "Trần Bảo Nguyên",
      email: "nguyen.tran186@hcmut.edu.vn",
      print_id: "B01F201",
      file_name: "cnpm.docx",
      date: "20/10/2023",
      start_time: "09:47 AM",
      end_time: "09:50 AM",
      size: "501KB",
      paper: "A4",
      page: 15,
      quantity: 1
    },
    {
      id: 11,
      user_name: "Trịnh Xuân Khải",
      email: "khai.trinhxuan@hcmut.edu.vn",
      print_id: "A04F501",
      file_name: "report2.pdf",
      date: "21/10/2023",
      start_time: "01:46 PM",
      end_time: "01:50 PM",
      size: "1.460KB",
      paper: "A4",
      page: 27,
      quantity: 1
    },
    {
      id: 12,
      user_name: "Phạm Huỳnh Quốc Thạnh",
      email: "thanh.phamhuynh2806@hcmut.edu.vn",
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
          <AdLogTable 
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

export default AdLog;
