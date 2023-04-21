import React from "react";
import "../App.css";
import { Card, Row, Col, Image } from "react-bootstrap";
import styled from "styled-components";

const StyledImage = styled(Image)`
  height: 15vh;
  box-shadow: 18px 18px #367055;

  @media (max-width: 585px) {
    height: 10vh;
  }
`;

const StyledLink = styled.h4.attrs({})`
  z-index: 9999 !important;
  text-align: left !important;

  a {
    color: #000;
    font-size: 0.7em;
    text-decoration: none;
    z-index: 9999 !important;
    text-align: left !important;
  }
`;

const StyledLinkRow = styled(Row)`
  max-width: 300px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledFirstName = styled.h1`
  color: #ffb162;

  :hover {
    color: #367055;
  }

  transition: color 0.5s ease-in-out;
`;

const StyledBadge = styled(Card)`
  width: 8em;
  border: 1px solid black !important;
  border-radius: 5px;
  box-shadow: 15px 15px #367055;
`;

const Header = () => {
  return (
    <>
      {/* Badge ja nimi */}
      <Row className="header--style">
        <Col xs={8}>
          <StyledBadge>
            <Card.Text className="BadgeText">Software Enthusiast </Card.Text>
          </StyledBadge>
          <StyledFirstName className="MyName mt-4">
            <strong>Arttu</strong> Jantunen
          </StyledFirstName>
          <StyledLinkRow>
            <StyledLink>
              <a className="link" href="mailto:arttu.jan@gmail.com">
                arttu.jan@gmail.com
              </a>
            </StyledLink>
          </StyledLinkRow>
          <StyledLinkRow>
            <StyledLink>
              <a
                className="link"
                href="https://www.linkedin.com/in/arttujantunen"
              >
                LinkedIn
              </a>
            </StyledLink>
          </StyledLinkRow>
          <StyledLinkRow>
            <StyledLink>
              <a className="link" href="https://github.com/arttujan">
                Github
              </a>
            </StyledLink>
          </StyledLinkRow>
        </Col>
        <Col xs={4}>
          <StyledImage
            className="Omakuva"
            src="./images/omakuva.jpeg"
            rounded
          />
        </Col>
      </Row>
    </>
  );
};

export default Header;
