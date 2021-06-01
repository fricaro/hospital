import styled from "styled-components";
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

export const Welcome = styled.div`
  width: 800px;
`;

export const Paragraph = styled.div`
  margin-top: 3rem;
  font-size: 15px;
`;

export const Header = styled.div`
  font-size: 2rem;
`;
