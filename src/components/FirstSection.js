import React from "react";
import { Col, Card } from "react-bootstrap";

const FirstSection = () => {
  return (
    <>
      <Col>
        <Card className="border-0">
          <Card.Body>
            <Card.Title>
              <strong>Skills</strong>
            </Card.Title>

            <Card.Subtitle className="mb-2 mt-5">
              <strong>Software development</strong>
            </Card.Subtitle>
            <Card.Text className="CardText">
              React, Webpack, Websockets, Web architecture, Node.js, Typescript,
              GraphQL, PHP, Java, C# ...
            </Card.Text>

            <Card.Subtitle className="mb-2 mt-4">
              <strong>Server management</strong>
            </Card.Subtitle>
            <Card.Text className="CardText">
              Python, Nginx, Pm2, Azure, AWS ...
            </Card.Text>

            <Card.Subtitle className="mb-2 mt-4">
              <strong>Databases</strong>
            </Card.Subtitle>
            <Card.Text className="CardText">
              MySQL, MariaDB, SQLite, MongoDb ...
            </Card.Text>

            <Card.Subtitle className="mb-2 mt-4">
              <strong>Mobile development</strong>
            </Card.Subtitle>
            <Card.Text className="CardText">
              Android native (Java & Kotlin), React Native (Expo Cli & React
              Native Cli), React PWA ...
            </Card.Text>

            <Card.Subtitle className="mb-2 mt-4">
              <strong>Data Science</strong>
            </Card.Subtitle>
            <Card.Text className="CardText">
              Hadoop, Hbase, Pig, Excel ...
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card className="border-0">
          <Card.Body>
            <Card.Title>
              <strong>What I actually enjoy</strong>
            </Card.Title>

            <Card.Subtitle className="mb-2 mt-5">
              <strong>Teamwork</strong>
            </Card.Subtitle>
            <Card.Text className="CardText">
              Enhancing the team's performance and well-being by helping others
              and sharing my knowledge. I enjoy working with people and trying
              to make the team work as well as possible.
            </Card.Text>

            <Card.Subtitle className="mb-2 mt-4">
              <strong>Software development</strong>
            </Card.Subtitle>
            <Card.Text className="CardText">
              Web development and design with various frameworks and graphic
              design tools.
            </Card.Text>
            <Card.Text className="CardText">
              My main tools are Figma for UI / UX design, React for frontend and
              React Native for Mobile development. Which I have all used for
              several years.
            </Card.Text>
            <Card.Text className="CardText">
              Good architectural design, code maintainability and transparency
              in the development process are important to me.
            </Card.Text>

            <Card.Subtitle className="mb-2 mt-4">
              <strong>Hobbies when I'm not on my computer</strong>
            </Card.Subtitle>
            <Card.Text className="CardText">
              Powerlifting and trackbikes.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default FirstSection;
