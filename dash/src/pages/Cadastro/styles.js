import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Image from "../../assets/background1.jpg";

export const Container = styled.div`
  background: url(${Image}) no-repeat fixed center;
  background-color: #000836;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Content = styled.div`
  background: rgb(245, 245, 245);
  display: flex;
  padding: 3rem;
`;

export const FormWrapper = styled.div`
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  font-size: 2rem;
`;

export const Wrapper = styled.div`
  margin: 3rem;
`;

export const TextFieldStyled = styled(TextField)`
  width: 400px;
`;

export const WrapperButton = styled.div`
  margin: 3rem;
  display: flex;
  justify-content: flex-end;
`;

export const ButtonStyled = styled(Button)`
  width: 100px;
`;
