import { Outlet } from "react-router-dom";
import { Navigation, Footer } from "../../components/index.component";

const SharedLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
