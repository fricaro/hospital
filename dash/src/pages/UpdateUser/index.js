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
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import UserService from "../../services/UserService";
import { toast } from "react-toastify";

const UpdateUser = (props) => {
  const { register, handleSubmit } = useForm();
  let history = useHistory();

  const username = props.location.state?.user.username;
  const id = props.location.state?.user.id;

  const onSubmit = ({ username }) => {
    try {
      UserService.updateName(username, id);
      history.push("/listagem");
      toast.success("Dados atualizados com sucesso.");
    } catch (error) {
      toast.error("Falha na atualização de dados.");
      history.push("/listagem");
    }
  };

  return (
    <Container>
      <Content>
        <FormWrapper>
          <Header>Nome do usuário atual: {username}</Header>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Wrapper>
              <TextFieldStyled
                label="Novo nome do usuário"
                id="margin-none"
                {...register("username")}
              />
            </Wrapper>
            <WrapperButton>
              <ButtonStyled variant="contained" type="submit">
                Atualizar
              </ButtonStyled>
            </WrapperButton>
          </Form>
        </FormWrapper>
      </Content>
    </Container>
  );
};

export default UpdateUser;
