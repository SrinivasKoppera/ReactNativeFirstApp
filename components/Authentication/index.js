import { useSelector } from "react-redux";
import { LoginModul, MyDrawer, SignUpModul } from "../Routing";

export const Authenticator = () => {
  const userToken = useSelector((state) => state.Login.credentials);
  // console.log("This is Login State : ", userToken);
  return userToken.length === 0 ? <LoginModul /> : <MyDrawer />;
};
