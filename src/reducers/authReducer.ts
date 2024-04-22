interface Action {
  type: "ACTIVE-SIGNUP" | "ACTIVE-SIGNIN";
}

const AuthReducer = (state: boolean, action: Action): boolean => {
  if (action.type === "ACTIVE-SIGNUP") return true;
  if (action.type === "ACTIVE-SIGNIN") return false;

  return state;
};

export default AuthReducer;
