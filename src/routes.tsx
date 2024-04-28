import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";

const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <SignupPage />,
  },
  {
    path: "/sign-in",
    element: <SigninPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export default router;
