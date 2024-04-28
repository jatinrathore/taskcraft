import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignupForm from "../components/SignupForm";
import GitHubFooter from "../components/GitHubFooter";
import NavBar from "../components/NavBar";

const SignupPage = () => {
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
        <SignupForm />
      </div>
      <GitHubFooter />;
    </>
  );
};

export default SignupPage;
