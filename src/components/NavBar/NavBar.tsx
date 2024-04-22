import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import useTaskCraftStore from "../../store";
import toast from "react-hot-toast";

const NavBar = () => {
  const isLoggedIn = !!localStorage.getItem(
    import.meta.env.VITE_AUTH_TOKEN_KEY
  );
  const navigate = useNavigate();

  const isActive = useTaskCraftStore((s) => s.isSignupActive);
  const setActive = useTaskCraftStore((s) => s.setSignupActive);

  return (
    <div className="nb-container">
      <p className="nb-title">TaskCraft</p>
      <div className="nb-btn-group">
        {isLoggedIn ? (
          <button
            className={`nb-btn nb-selected-btn`}
            onClick={() => {
              localStorage.removeItem(import.meta.env.VITE_AUTH_TOKEN_KEY);
              toast.success("Logged out successfully!");
              navigate("/");
            }}
          >
            Log out
          </button>
        ) : (
          <>
            <button
              className={`nb-btn ${isActive ? "" : "nb-selected-btn"}`}
              onClick={() => {
                setActive(false);
                navigate("/sign-in");
              }}
            >
              Log in
            </button>
            <button
              className={`nb-btn ${isActive ? "nb-selected-btn" : ""}`}
              onClick={() => {
                setActive(true);
                navigate("/");
              }}
            >
              Sign up
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
