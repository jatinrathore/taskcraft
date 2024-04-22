import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useEffect } from "react";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = !!localStorage.getItem(
      import.meta.env.VITE_AUTH_TOKEN_KEY
    );

    if (!isLoggedIn) navigate("/");
  }, []);

  return (
    <>
      <NavBar />
      Hello
    </>
  );
};

export default Dashboard;
