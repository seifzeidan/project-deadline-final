import { BiAddToQueue } from "react-icons/bi";
import { BsFillCollectionFill } from "react-icons/bs";
import { ImProfile } from "react-icons/im";
import { GoReport } from "react-icons/go";
import { BsFillTerminalFill } from "react-icons/bs";

const links = [
  {
    id: 1,
    text: "Published Courses",
    path: "/instructor-courses",
    icon: <BsFillCollectionFill />,
  },
  {
    id: 2,
    text: "Add New Course",
    path: "/add-course",
    icon: <BiAddToQueue />,
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
