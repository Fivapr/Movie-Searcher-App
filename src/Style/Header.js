import { AppBar, Toolbar, Typography } from "material-ui";
import styled from "styled-components";

export const StyledAppBar = styled(AppBar)`
  && {
    background-color: #ff7961;
  }
`;

export const StyledToolbar = styled(Toolbar)`
  && {
    margin: 0 auto;
    width: 1000px;
    padding: 0;
  }
`;

export const StyledTypography = styled(Typography)`
  && {
    padding: 22px;
    cursor: pointer;
    &&:hover {
      background-color: #f44336;
    }
  }
`;

export const AppName = styled(Typography)`
  && {
    padding: 22px;
  }
`;
