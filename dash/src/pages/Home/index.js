import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  Container,
  Welcome,
  Contents,
  Content,
  Header,
  Paragraph,
} from "./styles";

const Login = () => {
  const [user, setUser] = useState({});
  const auth = useAuth();

  useEffect(() => {
    (async () => {
      try {
        setUser(await auth.getUser());
      } catch (error) {
        setUser({});
      }
    })();
  }, [auth]);

  return (
    <Container>
      <Contents>
        <Content>
          <Welcome>
            <Header>Bem-vindo {user.username}!</Header>
            <Paragraph>
              Gostaria de atualizar seus dados? clique{" "}
              <Link
                to={{
                  pathname: "/update",
                  state: { user: user },
                }}
              >
                aqui.
              </Link>
            </Paragraph>
            {auth.isAdmin() ? (
              <>
                <Paragraph>
                  Usuários admin podem <Link to="/cadastro"> criar </Link>{" "}
                  contas para profissionais do hospital, clínica e farmácia.
                </Paragraph>
                <Paragraph>
                  <Link to={"/listagem"}>Editar ou remover</Link> usuários do
                  sistema.
                </Paragraph>
              </>
            ) : (
              <Paragraph>
                Você pode acessar nossos sistemas:
                <br />
                <a href="https://deps-pdist-hospital-frontend.herokuapp.com/">
                  Hospital
                </a>
                <br />
                <a href="https://hosp-farmacia.herokuapp.com/">Farmácia</a>
                <br />
              </Paragraph>
            )}
          </Welcome>
        </Content>
      </Contents>
    </Container>
  );
};

export default Login;
