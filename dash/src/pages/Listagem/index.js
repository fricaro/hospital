import { useEffect, useState } from "react";
import TableComponent from "../../Components/Table";
import UserService from "../../services/UserService";
import { Container, Welcome, Content, Header, Paragraph } from "./styles";

const Listagem = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const users = await UserService.getAll();
      setUsers(users);
    })();
  }, []);

  return (
    <Container>
      <Content>
        <Welcome>
          <Header>Lista de usuários do sistema:</Header>
          <Paragraph>
            <TableComponent
              users={users}
              setUsersTable={setUsers}
            ></TableComponent>
          </Paragraph>
        </Welcome>
      </Content>
    </Container>
  );
};

export default Listagem;
