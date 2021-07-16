import React from 'react'
import { Row, Col, Card, Image } from 'react-bootstrap'
const Home = () => {
    return (
        <>
            <Row>
                <Col xs={0} sm={2} md={2}></Col>
                <Col xs={9} sm={4} md={4}>
                    <Card className="Badge" text="light" bg="dark">
                        <Card.Text className="BadgeText">
                            Developer 
                        </Card.Text>
                    </Card>
                    <h1 className="MyName"><strong>Arttu</strong> Jantunen</h1>
                    <h4 className="text-muted">arttu.jan@gmail.com</h4>
                    <h5><a className="LinkedIn" href="https://www.linkedin.com/in/arttujantunen">LinkedIn</a></h5>
                    <h5><a className="LinkedIn" href="https://github.com/arttujan">Github</a></h5>
                </Col>
                <Col xs={3} sm={4} md={4}>
                    <Image className="Omakuva" src="./images/omakuva.jpeg" rounded />
                </Col>
                <Col xs={0} sm={2} md={2}></Col>
            </Row>
        </>
    )
}

export default Home
