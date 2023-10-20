import { faCcPaypal } from "@fortawesome/free-brands-svg-icons";
import {
  faTachometer,
  faInfo,
  faClockFour
} from "@fortawesome/free-solid-svg-icons";

const initadMenu = [
  {
    label: "Thông tin cá nhân",
    path: "/user/",
    icon: faTachometer,
  },
  {
    label: 'Quản lý'
  },
  {
    label: "Quản lý tài khoản",
    path: "/user/printService",
    icon: faCcPaypal,
  },
  {
    label: "Quản lý máy in",
    path: "/user/printHistory",
    icon: faClockFour,
  },
  
  {
    label: "Quản lý tập tin",
    path: "/user/bank",
    icon: faCcPaypal,
  },

  {
    label: 'Khác'
  },
  {
    label: "Lịch sử in",
    path: "/user/info",
    icon: faInfo,
  },
];

export default initadMenu