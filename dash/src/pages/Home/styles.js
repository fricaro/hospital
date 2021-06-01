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
  width: 450px;
  height: 458px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
  margin-right: 2rem;
  border: 1px solid rgba(0, 20, 130, 0.4);
  border-radius: 0.8rem;
  padding: 1rem;
  box-shadow: 3px 3px 15px 0px #000836;
`;

export const Contents = styled.div`
  justify-content: flex-start;
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
  margin-left: 1rem;
`;

export const Welcome = styled.div`
  width: 300px;
`;

export const Paragraph = styled.div`
  margin-top: 2.5rem;
  font-size: 15px;
`;

export const Header = styled.div`
  font-size: 2rem;
`;
