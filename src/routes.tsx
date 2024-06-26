import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import SignupForm from "./components/SignupForm";
import SigninForm from "./components/SigninForm";
import TaskContainer from "./components/TaskContainer";

const router = createBrowserRouter([
  {
    path: "",
    element: <AppLayout />,
    children: [
      { index: true, element: <SignupForm /> },
      { path: "/sign-in", element: <SigninForm /> },
      {
        path: "/dashboard",
        element: <TaskContainer />,
      },
    ],
  },
]);

export default router;
