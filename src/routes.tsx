import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import SignupForm from "./components/SignupForm";
import SigninForm from "./components/SigninForm";
import Dashboard from "./pages/Dashboard";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";

const router = createBrowserRouter([
  // {
  //   path: "",
  //   element: <AppLayout />,
  //   children: [
  //     { index: true, element: <SignupForm /> },
  //     { path: "/sign-in", element: <SigninForm /> },
  //   ],
  // },
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
