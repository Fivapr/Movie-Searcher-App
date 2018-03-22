import {
  Card,
  CardTitle,
  MediaOverlay,
  Media,
  Button,
  CardText
} from "react-md";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const CardContainer = styled.div`
  display: flex;
`;

export const StyledCard = styled(Card)`
  margin: 10px;
`;

export const StyledMedia = styled(Media)`
  height: 600px;
  width: 400px;
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

export const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const OtherInfo = styled.div`
  flex: 6;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Overview = styled(CardText)`
  flex: 4;
  font-size: 20px;
`;

export const Title = styled(CardText)`
  font-size: 26px;
  text-align: center;
`;
