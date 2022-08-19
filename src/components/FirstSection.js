import React from 'react'
import { Col, Card } from 'react-bootstrap'

const FirstSection = () => {
    return (
        <>
            <Col>
            <Card className="border-0">
              <Card.Body>
                <Card.Title><strong>Skills</strong></Card.Title>

                  <Card.Subtitle className="mb-2 mt-5 text-muted">Web development</Card.Subtitle>
                    <Card.Text className="CardText">
                      React, Webpack, Websockets, Web architecture, Express, PHP ...
                    </Card.Text>
                
                  <Card.Subtitle className="mb-2 mt-4 text-muted">Traditional programming</Card.Subtitle>
                    <Card.Text className="CardText">
                      Java, C# ...
                    </Card.Text>

                  <Card.Subtitle className="mb-2 mt-4 text-muted">Server management</Card.Subtitle>
                    <Card.Text className="CardText">
                      Python, Nginx, Pm2, Azure ...
                    </Card.Text>

                  <Card.Subtitle className="mb-2 mt-4 text-muted">Databases</Card.Subtitle>
                    <Card.Text className="CardText">
                      MySQL, MariaDB, SQLite, MongoDb ...
                    </Card.Text>
                  
                  <Card.Subtitle className="mb-2 mt-4 text-muted">Mobile development</Card.Subtitle>
                    <Card.Text className="CardText">
                      Android native (Java & Kotlin), React Native (Expo Cli & React Native Cli) ...
                    </Card.Text>

                  <Card.Subtitle className="mb-2 mt-4 text-muted">Data Science</Card.Subtitle>
                    <Card.Text className="CardText">
                      Hadoop, Hbase, Pig, Excel ...
                    </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          <Col>
          <Card className="border-0">
              <Card.Body>
                <Card.Title><strong>What I actually enjoy</strong></Card.Title>

                  <Card.Subtitle className="mb-2 mt-5 text-muted">Web development</Card.Subtitle>
                    <Card.Text className="CardText">
                      Frontend development and design with various frameworks and graphic design tools.
                    </Card.Text>
                    <Card.Text className="CardText">
                      My main tools are Figma for UI / UX design, and React for frontend, which I have both used for several years.
                    </Card.Text>
                    <Card.Text className="CardText">
                      Good architectural design and code maintainability are important for me.
                    </Card.Text>

                  <Card.Subtitle className="mb-2 mt-4 text-muted">Mobile development</Card.Subtitle>
                    <Card.Text className="CardText">
                      React native mobile development using Expo Cli or React native Cli.
                    </Card.Text>
                  
                  <Card.Subtitle className="mb-2 mt-4 text-muted">Hobbies when I'm not on my computer</Card.Subtitle>
                    <Card.Text className="CardText">
                      Powerlifting and trackbikes.
                    </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </>
    )
}

export default FirstSection