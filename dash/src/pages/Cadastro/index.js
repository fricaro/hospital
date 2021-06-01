import {
  Container,
  Form,
  FormWrapper,
  Wrapper,
  WrapperButton,
  ButtonStyled,
  TextFieldStyled,
  Content,
  Header,
} from "./styles";
import UserService from "../../services/UserService/index";
import { Redirect, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { MenuItem } from "@material-ui/core";
import { Select } from "@material-ui/core";

const Cadastro = () => {
  const [authority, setAuthority] = useState("USER");
  const [open, setOpen] = useState(false);
  const { register, handleSubmit } = useForm();
  const auth = useAuth();
  let history = useHistory();

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = (event) => {
    setAuthority(event.target.value);
  };

  const onSubmit = ({ username, password }) => {
    try {
      UserService.create({ username, password, authority });
      toast.success("Usuário criado com sucesso");
      history.push("/login");
      return <Redirect to="/login" />;
    } catch (error) {
      toast.error("Não foi possível criar usuário");
    }
  };

  return (
    <Container>
      <Content>
        <FormWrapper>
          <Header>Cadastre-se!</Header>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Wrapper>
              <TextFieldStyled
                label="usuário"
                id="margin-none"
                {...register("username")}
              />
            </Wrapper>
            <Wrapper>
              <TextFieldStyled
                label="senha"
                id="margin-none"
                {...register("password")}
              />
            </Wrapper>
            {auth.isAuthenticated() && (
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={authority}
                onChange={handleChange}
              >
                <MenuItem value={"ADMIN"}>Administrador</MenuItem>
                <MenuItem value={"ADMIN"}>Farmacêutico</MenuItem>
                <MenuItem value={"ADMIN"}>Médico</MenuItem>
              </Select>
            )}
            <WrapperButton>
              <ButtonStyled variant="contained" type="submit">
                Enviar
              </ButtonStyled>
            </WrapperButton>
          </Form>
        </FormWrapper>
      </Content>
    </Container>
  );
};

export default Cadastro;
