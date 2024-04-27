import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useEffect } from "react";
import TaskContainer from "../components/TaskContainer";
import { defaultCategories, defaultTasks } from "../service/defaultData";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = !!localStorage.getItem(
      import.meta.env.VITE_AUTH_TOKEN_KEY
    );

    if (!isLoggedIn) {
      navigate("/");
    } else {
      // Check if items are already set in localStorage
      const isItemsSet = localStorage.getItem("itemsSet");

      // If items are not set, set them and mark them as set
      if (!isItemsSet) {
        localStorage.setItem(
          import.meta.env.VITE_LOCAL_STORAGE_TASK,
          JSON.stringify(defaultTasks)
        );
        localStorage.setItem(
          import.meta.env.VITE_LOCAL_STORAGE_CATEGORY,
          JSON.stringify(defaultCategories)
        );
        localStorage.setItem("itemsSet", "true");
      }
    }
  }, [navigate]);

  return (
    <>
      <NavBar />
      <TaskContainer />
    </>
  );
};

export default Dashboard;
