import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "body";
  grid-template-rows: 70px auto;
  height: 100%;
`;

export const Header = styled.div`
  grid-area: header;
  background-color: #000836;
  display: flex;
  justify-content: flex-start;
`;

export const Body = styled.div`
  grid-area: body;
  display: grid;
  grid-template-areas: "nav" "main";
  grid-template-rows: minmax(0px, 70px) auto;
  background-color: #000836;
`;

export const NavWrapper = styled.div`
  grid-area: nav;
  border-right: 1px solid rgba(0.5, 0.5, 0.5, 0.1);
  width: 99%;
  background: #000836;
  height: 70px;
`;

export const Main = styled.div`
  grid-area: main;
  background-color: rgb(166, 166, 166);
  width: 100%;
  height: 100%;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  color: white;
`;

export const LogoWrapper = styled.div`
  margin: 1rem;
  width: 95%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
`;
