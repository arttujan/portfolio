import React from 'react'
import { Card, Col } from 'react-bootstrap'

const Education = () => {
    return (
            <Col className="data">
                <Card className="border-0">
                    <Card.Body>
                        <Card.Title><strong>Education</strong></Card.Title>

                        <Card.Subtitle className="mb-2 mt-5 text-muted">Jyväskylän Lyseo secondary school graduate</Card.Subtitle>
                            <Card.Text className="CardText">
                            2012 - 2015
                            </Card.Text>
                        
                        <Card.Subtitle className="mb-2 mt-4 text-muted">Savonia AMK Bachelor of Engineering, Software Engineering</Card.Subtitle>
                            <Card.Text className="CardText">
                            Jan. 2018 - today
                            </Card.Text>

                    </Card.Body>
                </Card>
            </Col>
    )
}

export default Education
