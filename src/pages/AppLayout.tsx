import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const AppLayout = () => {
  return (
    <>
      <NavBar />
      <div className="flex justify-center">
        <Outlet />
      </div>
    </>
  );
};

export default AppLayout;
