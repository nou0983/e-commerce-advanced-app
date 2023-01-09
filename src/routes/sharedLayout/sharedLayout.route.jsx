import { Outlet } from "react-router-dom";
import { Navigation, Footer, SideBar } from "../../components/index.component";

const SharedLayout = () => {
  return (
    <>
      <Navigation />
      <SideBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
