import {
  faHouseUser,
  faFileLines,
  faClockFour,
  faUsers,
  faPrint
} from "@fortawesome/free-solid-svg-icons";

const initadMenu = [
  {
    label: "Trang của tôi",
    path: "/SSPS-frontend/admin/",
    icon: faHouseUser,
  },
  {
    label: 'Quản lý'
  },
  {
    label: "Quản lý tài khoản",
    path: "/accManage",
    icon: faUsers,
  },
  {
    label: "Quản lý máy in",
    path: "/prManage",
    icon: faPrint,
  },
  
  {
    label: "Quản lý tập tin",
    path: "/perFileManage",
    icon: faFileLines
  },

  {
    label: 'Khác'
  },
  {
    label: "Lịch sử in",
    path: "/adLog",
    icon: faClockFour,
  },
];

export default initadMenu