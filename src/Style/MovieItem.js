import { Card, Media, Button } from "react-md";
import styled from "styled-components";

export const StyledCard = styled(Card)`
  margin: 10px;
`;

export const StyledMedia = styled(Media)`
  height: 345px;
  width: 230px;
`;

export const Poster = styled.img.attrs({
  alt: "Movie poster"
})`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const StyledButton = styled(Button).attrs({
  className: "md-cell--right",
  icon: true
})``;
