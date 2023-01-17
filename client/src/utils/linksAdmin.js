//import { BiSearchAlt } from "react-icons/bi";
// import { BsFillCollectionFill } from "react-icons/bs";
// import { ImProfile } from "react-icons/im";
// import { GoReport } from "react-icons/go";
import { AiOutlineFolderView } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";
//import { GrUserAdmin } from "react-icons/gr";
import { GoRequestChanges } from "react-icons/go";
import { TbDiscount } from "react-icons/tb";

const links = [
  {
    id: 1,
    text: "View Reported Problems",
    path: "/view-problems",
    icon: <AiOutlineFolderView />,
  },
  {
    id: 2,
    text: "Add New User",
    path: "/add-new",
    icon: <AiOutlineUserAdd />,
  },

  {
    id: 3,
    text: "Corporate Requests",
    path: "/corporate-requests",
    icon: <GoRequestChanges />,
  },
  {
    id: 4,
    text: "Set Promotions",
    path: "/set-promotions",
    icon: <TbDiscount />,
  },
];
export default links;
