import styled from "styled-components";
import MenuList from "@material-ui/core/MenuList";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";

export const Container = styled.div``;

export const MenuListWrapper = withStyles({
  root: {
    display: "flex",
  },
})(MenuList);

export const LinkWrapper = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    text-decoration-color: white;
    text-decoration-thickness: 1.5px;
  }
`;

export const MenuItemWrapper = withStyles({
  root: {
    color: "white",
  },
})(MenuItem);
