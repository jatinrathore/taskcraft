import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";

const NavBar = () => {
  const navigate = useNavigate();
  const [isSignupActive, setSignupActive] = useState<boolean>(true);

  return (
    <div className="nb-container">
      <p className="nb-title">TaskCraft</p>
      <div className="nb-btn-group">
        <button
          className={`nb-btn ${isSignupActive ? "" : "nb-selected-btn"}`}
          onClick={() => {
            setSignupActive(false);
            navigate("/sign-in");
          }}
        >
          Log in
        </button>
        <button
          className={`nb-btn ${isSignupActive ? "nb-selected-btn" : ""}`}
          onClick={() => {
            setSignupActive(true);
            navigate("/");
          }}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default NavBar;
