import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/Job";
import CourseInfo from "./CourseInfo";
import { BsFillPersonFill } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { CiDollar } from "react-icons/ci";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
const Course = ({ title, instructorName, price, subtitles, _id }) => {
  const { IncViewers } = useAppContext();
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{title.charAt(0)}</div>
        <div className="info">
          <h4>{title}</h4>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <CourseInfo icon={<GoPrimitiveDot />} text={subtitles[0]} />
          <CourseInfo icon={<BsFillPersonFill />} text={instructorName} />
          <CourseInfo icon={<CiDollar />} text={price} />
          <CourseInfo icon={<MdOutlineAccessTime />} text={22} />
        </div>
        <div className="actions">
          <Link
            to="/pay"
            className="btn delete-btn"
            onClick={() => IncViewers(_id)}
          >
            Buy
          </Link>
          <Link
            to="/view-course"
            className="btn edit-btn"
            onClick={() => IncViewers(_id)}
          >
            View
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};
export default Course;

//{/*onClick={() => useAppContext()}*/} /put the functions you want from the
//app context in the onClick()
