import React from 'react'
import { Col, Card } from 'react-bootstrap'

const Skills = () => {
    return (
            <Col className="data">
                <Card className="border-0">
                    <Card.Body>
                        <Card.Title><strong>Skills</strong></Card.Title>

                        <Card.Subtitle className="mb-2 mt-5 text-muted">Web development</Card.Subtitle>
                            <Card.Text className="CardText">
                            React, Bootstrap, Sass, Node.js, Express, PHP ...
                            </Card.Text>
                        
                        <Card.Subtitle className="mb-2 mt-4 text-muted">Traditional programming</Card.Subtitle>
                            <Card.Text className="CardText">
                            Java, C# ...
                            </Card.Text>

                        <Card.Subtitle className="mb-2 mt-4 text-muted">Server management</Card.Subtitle>
                            <Card.Text className="CardText">
                            Python scripting, Nginx, Pm2, Azure ...
                            </Card.Text>

                        <Card.Subtitle className="mb-2 mt-4 text-muted">Databases</Card.Subtitle>
                            <Card.Text className="CardText">
                            MySQL, SQLite, MongoDb ...
                            </Card.Text>
                        
                        <Card.Subtitle className="mb-2 mt-4 text-muted">Mobile development</Card.Subtitle>
                            <Card.Text className="CardText">
                            Android native (Java), React Native (Expo Cli & React Native Cli) ...
                            </Card.Text>

                        <Card.Subtitle className="mb-2 mt-4 text-muted">Data Science</Card.Subtitle>
                            <Card.Text className="CardText">
                            Hadoop, Hbase, Pig, Excel ...
                            </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
    )
}

export default Skills
