import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useEffect } from "react";
import GitHubFooter from "../components/GitHubFooter";

const AppLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = !!localStorage.getItem(
      import.meta.env.VITE_AUTH_TOKEN_KEY
    );

    if (isLoggedIn) navigate("/dashboard");
  }, []);

  return (
    <>
      <NavBar />
      <div className="flex justify-center">
        <Outlet />
      </div>
      <GitHubFooter />
    </>
  );
};

export default AppLayout;
