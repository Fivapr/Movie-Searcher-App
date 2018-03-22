import styled from "styled-components";
import { Button, TextField } from "react-md";

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  margin: 20px;
  font-size: 21px;
`;

export const FormContainer = styled.form`
  margin: 20px auto;
  min-width: 300px;
  display: flex;
  flex-direction: column;
`;

export const StyledLoginField = styled(TextField).attrs({
  id: "floating-center-title",
  label: "Title",
  lineDirection: "center",
  placeholder: "Enter your login",
  fullWidth: true
})``;

export const StyledPasswordField = styled(TextField).attrs({
  id: "floating-password",
  label: "Enter your password",
  type: "password",
  fullWidth: true
})``;

export const StyledButton = styled(Button).attrs({
  type: "submit",
  value: "submit",
  raised: true,
  swapTheming: true
})`
  && {
    background-color: #fe5b3d;
    flex: 1;
    margin-top: 20px;
  }
`;
