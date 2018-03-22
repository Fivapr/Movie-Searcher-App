import { Button } from "react-md";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  margin: 20px;
`;

export const StyledButton = styled(Button).attrs({
  type: "submit",
  value: "submit",
  raised: true,
  swapTheming: true
})`
  && {
    background-color: #fe5b3d;
  }
`;

export const StyledRightButton = styled(StyledButton)`
  margin-left: 10px;
`;
