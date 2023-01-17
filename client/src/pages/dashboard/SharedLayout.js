import { Outlet, Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";
import { SmallSidebar, BigSidebar, NavBar } from "../../components";

const SharedLayout = () => {
  return (
    <Wrapper>
      {/*Two column layout where the smallSidebar and bigSidebar are the same component but they appear at different pixel sizes (add to css later)    */}
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <NavBar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
export default SharedLayout;
