import {
  faHouseUser,
  faPrint,
  faInfo,
  faClockFour,
  faCreditCard
} from "@fortawesome/free-solid-svg-icons";

const initMenu = [
  {
    label: "Trang của tôi",
    path: "/user/",
    icon: faHouseUser,
  },
  {
    label: 'Dịch vụ in'
  },
  {
    label: "In tập tin",
    path: "/user/printService",
    icon: faPrint,
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
    icon: faCreditCard,
  },
  {
    label: "Chỉnh sửa thông tin",
    path: "/user/info",
    icon: faInfo,
  },
];

export default initMenu