import { Redirect, Route } from "react-router";
import { useAuth } from "../../../context/AuthContext";

const UpdateRoute = ({ children, ...rest }) => {
  let auth = useAuth();

  return (
    <>
      {
        auth.isAuthenticated() 
        ? <Route {...rest} render={({ location }) => children} />
        : <Route {...rest} component={({ location }) =>
            <Redirect to={{ pathname: "/login", state: { from: location }, }} />
        } />
      }
    </>
  );
}

export default UpdateRoute;