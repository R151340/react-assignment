import Cookies from "js-cookie";
import { Redirect, Route } from "react-router-dom";
import routes from "../config/routeConstants";

const ProtectedRoute = (props: any) => {
  const accessToken = Cookies.get("jwt_token");

  if (accessToken === undefined) return <Redirect to={routes.login} />;
  return <Route {...props} />;
};

export default ProtectedRoute;
