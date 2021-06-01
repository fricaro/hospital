import Login from "./pages/Login/index";
import Home from "./pages/Home/index";
import Cadastro from "./pages/Cadastro/index";
import Listagem from "./pages/Listagem";
import {
  Container,
  Main,
  Header,
  Body,
  NavWrapper,
  Logo,
  LogoWrapper,
} from "./styles";
import Nav from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./Components/RouteComponent/PrivateRoute/index";
import LoginRoute from "./Components/RouteComponent/LoginRoute";
import UpdateRoute from "./Components/RouteComponent/UpdateRoute";
import UpdateUser from "./pages/UpdateUser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "./context/AuthContext";

function App() {
  const auth = useAuth();
  return (
    <>
      <Container>
        <Header>
          <LogoWrapper>
            <Logo>Dashboard</Logo>
          </LogoWrapper>
        </Header>
        <Body>
          <Router>
            {auth.isAuthenticated() && (
              <NavWrapper>
                <Nav></Nav>
              </NavWrapper>
            )}
            <Main>
              <Switch>
                <LoginRoute path="/login">
                  <Login />
                </LoginRoute>
                <Route path="/cadastro" component={Cadastro} />
                <UpdateRoute
                  path="/update"
                  component={(props) => <UpdateUser {...props} />}
                />
                <PrivateRoute path="/" exact>
                  <Home />
                </PrivateRoute>
                <PrivateRoute path="/listagem">
                  <Listagem />
                </PrivateRoute>
              </Switch>
            </Main>
          </Router>
        </Body>
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={true}
        pauseOnHover={true}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
      />
    </>
  );
}

export default App;
