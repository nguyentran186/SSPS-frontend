import { faCcPaypal } from "@fortawesome/free-brands-svg-icons";
import {
  faTachometer,
  faInfo,
  faClockFour
} from "@fortawesome/free-solid-svg-icons";

const initadMenu = [
  {
    label: "Trang của tôi",
    path: "/admin",
    icon: faTachometer,
  },
  {
    label: 'Quản lý'
  },
  {
    label: "Quản lý tài khoản",
    path: "/admin/accManage",
    icon: faCcPaypal,
  },
  {
    label: "Quản lý máy in",
    path: "/admin/prManage",
    icon: faClockFour,
  },
  
  {
    label: "Quản lý tập tin",
    path: "/admin/perFileManage",
    icon: faCcPaypal,
  },

  {
    label: 'Khác'
  },
  {
    label: "Lịch sử in",
    path: "/admin/adLog",
    icon: faInfo,
  },
];

export default initadMenu