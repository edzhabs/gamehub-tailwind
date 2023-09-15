import { Outlet } from "react-router-dom";
import NavBar from "../components/Nav/NavBar";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen dark:bg-dark-mode bg-slate-50">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
