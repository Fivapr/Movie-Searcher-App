import { Autocomplete, Button } from "react-md";
import { Typography } from "material-ui";
import styled from "styled-components";

export const StyledButton = styled(Button).attrs({
  type: "submit",
  value: "submit",
  raised: true,
  swapTheming: true
})`
  && {
    background-color: #ff7961;
  }
`;

export const StyledAutocomplete = styled(Autocomplete).attrs({
  filter: null,
  label: "Search by title",
  placeholder: "La la land"
})`
  && {
    margin-right: 20px;
  }
`;

export const FormContainer = styled.form`
  margin: 20px;
  display: flex;
  align-items: flex-end;
`;
