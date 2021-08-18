import React from "react";
import styled from "styled-components";
import { Header } from "../../styled/Header";

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 1.5em;
  display: flex;
  flex-direction: row-reverse;
  max-width: 800px;
  margin-bottom: ${(props) => (props.isBottom ? "0px" : "50px")};
  margin-left: calc(50vw - 325px - 2em);
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);

  @media (max-width: 1100px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 600px) {
    padding: 2.5em;
    flex-wrap: wrap;
  }
`;

const ImageContainer = styled.div``;

const Image = styled.img`
  max-width: 305px;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  @media (max-width: 800px) {
    max-width: 250px;
  }
  @media (max-width: 600px) {
    width: 100vw;
    height: 300px;
    max-width: 100%;
    object-position: top;
    margin-top: 30px;
  }
`;

const BodyContainer = styled.div`
  margin-left: 30px;
  @media (max-width: 600px) {
    margin-left: 0px;
  }
`;

const CardHeader = styled(Header)`
  font-size: 1.5em;
  font-weight: 700;
  margin-top: 0px;
  margin-bottom: 10px;
`;

const CardHeader2 = styled.h2`
  font-size: 1.25em;
  font-weight: 600;
  margin: 0;
`;

const BodyTextContainer = styled.div`
  margin-top: 20px;
`;

const EducationCard = ({
  header1,
  header2,
  imgSrc,
  imgAltText,
  body,
  isBottom,
}) => {
  return (
    <Card isBottom={isBottom}>
      <BodyContainer>
        <CardHeader>{header1}</CardHeader>
        {header2.map((h2, index) => (
          <CardHeader2 key={`card-header2-${index}`}>{h2}</CardHeader2>
        ))}
        <BodyTextContainer>{body}</BodyTextContainer>
      </BodyContainer>
      <ImageContainer>
        <Image src={imgSrc} alt={imgAltText}></Image>
      </ImageContainer>
    </Card>
  );
};

export default EducationCard;
