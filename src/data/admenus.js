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
    path: "/admin/",
    icon: faHouseUser,
  },
  {
    label: 'Quản lý'
  },
  {
    label: "Quản lý tài khoản",
    path: "/admin/accManage",
    icon: faUsers,
  },
  {
    label: "Quản lý máy in",
    path: "/admin/prManage",
    icon: faPrint,
  },
  
  {
    label: "Quản lý tập tin",
    path: "/admin/perFileManage",
    icon: faFileLines
  },

  {
    label: 'Khác'
  },
  {
    label: "Lịch sử in",
    path: "/admin/adLog",
    icon: faClockFour,
  },
];

export default initadMenu