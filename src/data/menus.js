import { faCcPaypal } from "@fortawesome/free-brands-svg-icons";
import {
  faTachometer,
  faInfo,
  faClockFour
} from "@fortawesome/free-solid-svg-icons";

const initMenu = [
  {
    label: "Trang của tôi",
    path: "/user/",
    icon: faTachometer,
  },
  {
    label: 'Dịch vụ in'
  },
  {
    label: "In tập tin",
    path: "/user/printService",
    icon: faCcPaypal,
  },
  {
    label: "Lịch sử in",
    path: "/user/printHistory",
    icon: faClockFour,
  },
  
  {
    label: 'Tài khoản'
  },
  {
    label: "Liên kết ngân hàng",
    path: "/user/bank",
    icon: faCcPaypal,
  },
  {
    label: "Chỉnh sửa thông tin",
    path: "/user/info",
    icon: faInfo,
  },

  {
    label: 'Khác'
  },
];

export default initMenu