import React from 'react'
import { Col, Card } from 'react-bootstrap'

const Interests = () => {
    return (
            <Col className="data">
                <Card className="border-0">
                    <Card.Body>
                    <Card.Title><strong>Interests</strong></Card.Title>

                    <Card.Subtitle className="mb-2 mt-5 text-muted">Web development</Card.Subtitle>
                        <Card.Text className="CardText">
                        Frontend development and desing with various frameworks and graphic desing tools.
                        Currently I am protyping with Figma and using React with Material UI and node-sass for development.
                        </Card.Text>

                    <Card.Subtitle className="mb-2 mt-4 text-muted">Mobile development</Card.Subtitle>
                        <Card.Text className="CardText">
                        React native mobile development using Expo Cli or React native Cli.
                        </Card.Text>
                    
                    <Card.Subtitle className="mb-2 mt-4 text-muted">Hobbies</Card.Subtitle>
                        <Card.Text className="CardText">
                        Powerlifting and trackbikes.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
    )
}

export default Interests
