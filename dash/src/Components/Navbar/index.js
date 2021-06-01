import { useAuth } from "../../context/AuthContext";
import {
  Container,
  MenuListWrapper,
  MenuItemWrapper,
  LinkWrapper,
} from "./styles";

const Nav = () => {
  const auth = useAuth();

  const logout = () => {
    auth.logout();
  };

  return auth.isAuthenticated() ? (
    <Container>
      <MenuListWrapper>
        <LinkWrapper to={"/"}>
          <MenuItemWrapper>Home</MenuItemWrapper>
        </LinkWrapper>
        {auth.isAuthenticated() &&
          (() => {
            const links = [
              <LinkWrapper key="login" to={"/login"}>
                <MenuItemWrapper onClick={logout}>Sair</MenuItemWrapper>
              </LinkWrapper>,
            ];

            if (auth.isAdmin())
              links.unshift(
                <LinkWrapper key="listagem" to={"/listagem"}>
                  <MenuItemWrapper>Listagem</MenuItemWrapper>
                </LinkWrapper>
              );

            return links;
          })()}
      </MenuListWrapper>
    </Container>
  ) : (
    <></>
  );
};

export default Nav;
