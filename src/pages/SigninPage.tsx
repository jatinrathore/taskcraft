import { useNavigate } from "react-router-dom";
import GitHubFooter from "../components/GitHubFooter";
import NavBar from "../components/NavBar";
import SigninForm from "../components/SigninForm";
import { useEffect } from "react";

const SigninPage = () => {
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
        <SigninForm />
      </div>
      <GitHubFooter />;
    </>
  );
};

export default SigninPage;
