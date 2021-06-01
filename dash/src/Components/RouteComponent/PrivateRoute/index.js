import { Redirect, Route } from "react-router";
import { useAuth } from "../../../context/AuthContext";

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  const { location } = rest;

  

  return (
    auth.isAuthenticated()
    ? <Route {...rest} render={() => children } />
    : <Redirect to={{pathname: "/login", state: { from: location.pathname }}} />
  )
}

export default PrivateRoute;
