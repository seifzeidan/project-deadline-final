import links from "../utils/links";
import linksAdmin from "../utils/linksAdmin";
import linksInstructor from "../utils/linksInstructor";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../context/appContext"; //Dont forget to get the user from the appContext and change according to type.

const NavLinks = ({ toggleSidebar }) => {
  const { user } = useAppContext();
  let linksToUse = links;
  if (user.type === "admin") {
    linksToUse = linksAdmin;
    //linksToUse = links;
  } else if (user.type === "instructor") {
    linksToUse = linksInstructor;
  } else {
    linksToUse = links;
  }
  return (
    <div className="nav-links">
      {linksToUse.map((link) => {
        const { text, path, id, icon } = link;

        return (
          <NavLink
            to={path}
            key={id}
            onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;
