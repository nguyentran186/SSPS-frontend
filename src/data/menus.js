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
    path: "/user",
    icon: faHouseUser,
  },
  {
    label: 'Dịch vụ in'
  },
  {
    label: "In tập tin",
    path: "/printService",
    icon: faPrint,
  },
  {
    label: "Lịch sử in",
    path: "/printHistory",
    icon: faClockFour,
  },
  
  {
    label: 'Tài khoản'
  },
  {
    label: "Liên kết ngân hàng",
    path: "/bank",
    icon: faCreditCard,
  },
  {
    label: "Chỉnh sửa thông tin",
    path: "/info",
    icon: faInfo,
  },
];

export default initMenu