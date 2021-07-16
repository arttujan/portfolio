import React from 'react'
import { Col, Card } from 'react-bootstrap'

const Work = () => {
    return (
            <Col className="data">
                <Card className="border-0">
                    <Card.Body>
                        <Card.Title><strong>Work</strong></Card.Title>

                        <Card.Subtitle className="mb-2 mt-5 text-muted">Ahjokeskuksen Parturi-Kampaamo Homepage</Card.Subtitle>
                            <Card.Text className="CardText">
                            Oct. 2020 - Dec. 2020
                            <Card.Link className="CardText" href="https://www.ahjokeskuksenpk.fi/">ahjokeskuksenpk.fi</Card.Link>
                            </Card.Text>

                        <Card.Subtitle className="mb-2 mt-4 text-muted">Page for respiratory mechanics researchers</Card.Subtitle>
                            <Card.Text className="CardText">
                            Feb. 2021 - March 2021
                            <Card.Link className="CardText" href="https://www.hengitysmekaniikka.fi/">hengitysmekaniikka.fi</Card.Link>
                            </Card.Text>

                        <Card.Subtitle className="mb-2 mt-4 text-muted">One of the founders of Kaste Oy</Card.Subtitle>
                            <Card.Text className="CardText">
                            Jan. 2021
                            <Card.Link className="CardText" href="https://www.kaste.info/">kaste.info</Card.Link>
                            </Card.Text>
                            
                    </Card.Body>
                </Card>
            </Col>
    )
}

export default Work
