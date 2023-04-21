import React from "react";
import { Col, Card } from "react-bootstrap";

const SecondSection = () => {
  return (
    <>
      <Col className="col-md-6">
        <Card className="border-0">
          <Card.Body>
            <Card.Title>
              <strong>Work</strong>
            </Card.Title>

            <Card.Subtitle className="mb-2 mt-5">
              <strong>
                Ahjokeskuksen Parturi-Kampaamo Homepage (Freelance)
              </strong>
            </Card.Subtitle>
            <Card.Text className="CardText">
              Oct. 2020 - Dec. 2020 (still maintained and updated when needed)
              <Card.Link
                className="CardText"
                href="https://www.ahjokeskuksenpk.fi/"
              >
                <strong>ahjokeskuksenpk.fi</strong>
              </Card.Link>
            </Card.Text>
            <Card.Text className="CardText text-muted">
              Designed, developed and published a website for a barbershop /
              salong.
            </Card.Text>

            <Card.Subtitle className="mb-2 mt-4">
              <strong>One of the founders of Kaste</strong>
            </Card.Subtitle>
            <Card.Text className="CardText">
              Jan. 2020 - today
              <Card.Link className="CardText" href="https://www.kaste.info/">
                <strong>kaste.info</strong>
              </Card.Link>
            </Card.Text>
            <Card.Text className="CardText text-muted">
              Kaste is a company that provides software development services,
              mainly for health care and research. We have worked with React,
              React Native, Node.js, Express, MongoDB, Azure and many other
              technologies.
            </Card.Text>

            <Card.Subtitle className="mb-2 mt-4">
              <strong>Page for respiratory mechanics researchers</strong>
            </Card.Subtitle>
            <Card.Text className="CardText">Feb. 2021 - March 2021</Card.Text>
            <Card.Text className="CardText text-muted">
              Designed, developed and published a website for a group of
              researchers.
            </Card.Text>

            <Card.Subtitle className="mb-2 mt-4">
              <strong>Mobile development consulting for Sense4Health Oy</strong>
            </Card.Subtitle>
            <Card.Text className="CardText">Feb. 2021 - May 2021</Card.Text>
            <Card.Text className="CardText text-muted">
              Consulting for a mobile application development project made with
              React Native.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col className="col-md-6">
        <Card className="border-0">
          <Card.Body>
            <Card.Subtitle className="mb-2 mt-4">
              <strong>Web developer at Prospectum Oy</strong>
            </Card.Subtitle>
            <Card.Text className="CardText">
              Aug. 2021 - June 2022
              <Card.Link className="CardText" href="https://prospectum.fi/">
                <strong>Prospectum</strong>
              </Card.Link>
            </Card.Text>
            <Card.Text className="CardText text-muted">
              Frontend development with React, mobile development with React
              Native and design with Figma.
            </Card.Text>

            <Card.Subtitle className="mb-2 mt-4">
              <strong>Frontend Lead at Prospectum Oy</strong>
            </Card.Subtitle>
            <Card.Text className="CardText">
              June 2022 - March 2023
              <Card.Link className="CardText" href="https://prospectum.fi/">
                <strong>Prospectum</strong>
              </Card.Link>
            </Card.Text>
            <Card.Text className="CardText text-muted">
              Leading the frontend development team. Frontend architecture
              design. Frontend development with React, mobile development with
              React Native. Also helped with the recruitment of new developers.
            </Card.Text>
            <Card.Subtitle className="mb-2 mt-4">
              <strong>Consulting for Prospectum Oy</strong>
            </Card.Subtitle>
            <Card.Text className="CardText">
              March 2023 - Today
              <Card.Link className="CardText" href="https://prospectum.fi/">
                <strong>Prospectum</strong>
              </Card.Link>
            </Card.Text>
            <Card.Text className="CardText text-muted">
              Frontend development with React, design with Figma and various
              other tasks related to software architecture and development.
            </Card.Text>

            <Card.Subtitle className="mb-2 mt-4">
              <strong>Scrum Master at Bitcomp Oy</strong>
            </Card.Subtitle>
            <Card.Text className="CardText">
              March 2023 - Today
              <Card.Link className="CardText" href="https://bitcomp.com/fi/">
                <strong>Bitcomp</strong>
              </Card.Link>
            </Card.Text>
            <Card.Text className="CardText text-muted">
              Scrum Master for a team of 5+ developers working mainly with
              React, AWS, Typescript and Java.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default SecondSection;
