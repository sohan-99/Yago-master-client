import { Outlet } from "react-router-dom";
import Navber from "../componets/heaaders/Navber";

const MainLayout = () => {
  return (
    <main className="dark:bg-black dark:text-white min-h-screen overflow-hidden">
      <Navber />
      <Outlet />
      <h2>Footer</h2>
    </main>
  );
};

export default MainLayout;