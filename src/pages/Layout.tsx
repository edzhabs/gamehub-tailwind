import { Outlet } from "react-router-dom";
import NavBar from "../components/Nav/NavBar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen dark:bg-dark-mode bg-slate-50">
        <NavBar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
