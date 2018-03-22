import { MenuItem, FormControl, Select, Input, InputLabel } from "material-ui";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const YearsContainer = styled.div`
  flex: 1;
  margin: 20px;
  display: flex;
`;

export const FormControlContainer = styled(FormControl)`
  && {
    flex: 1;
    margin: 20px;
    display: flex;
  }
`;

export const YearsFormControl = styled(FormControl)`
  && {
    flex: 1;
  }
`;

export const YearsLeftFormControl = styled(YearsFormControl)`
  && {
    margin-right: 10px;
  }
`;
