export const LOGIN_ACTION = "LOGIN_ACTION";
export const LOGOUT_ACTION = "LOGOUT_ACTION";

export const loginAction = (loginCredentials) => {
  // console.log("This is Login Action : ", loginCredentials);
  return {
    type: LOGIN_ACTION,
    payload: loginCredentials,
  };
};

export const logOutAction = () => {
  console.log("This is Logout Action");
  return {
    type: LOGOUT_ACTION,
  };
};
