import { BiSearchAlt } from "react-icons/bi";
import { BsFillCollectionFill } from "react-icons/bs";
import { ImProfile } from "react-icons/im";
import { GoReport } from "react-icons/go";
//import { GrFormView } from "react-icons/gr";
import { BsFillTerminalFill } from "react-icons/bs";

const links = [
  {
    id: 1,
    text: "Find Courses",
    path: "/find-courses",
    icon: <BiSearchAlt />,
  },
  {
    id: 2,
    text: "Your Courses",
    path: "/",
    icon: <BsFillCollectionFill />,
  },
  {
    id: 3,
    text: "Profile",
    path: "/profile",
    icon: <ImProfile />,
  },
  {
    id: 4,
    text: "Report a problem",
    path: "/report-problem",
    icon: <GoReport />,
  },
  {
    id: 5,
    text: "View all reported",
    path: "/view-reported",
    icon: <BsFillTerminalFill />,
  },
];
export default links;
