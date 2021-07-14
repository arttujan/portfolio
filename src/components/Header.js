import React from 'react'
import '../App.css';
import { Card, Row, Col, Image } from 'react-bootstrap'

const Header = () => {
    return (
        <>  
            {/* Badge ja nimi */}
            <Row>
                <Col xs={8}>
                    <Card className="Badge" text="light" bg="secondary"><Card.Text className="BadgeText">Developer </Card.Text></Card>
                    <h1 className="MyName"><strong>Arttu</strong> Jantunen</h1>
                    <h4 className="text-muted">arttu.jan@gmail.com</h4>
                    <h5><a className="LinkedIn" href="https://www.linkedin.com/in/arttujantunen">LinkedIn</a></h5>
                </Col>
                <Col xs={4}>
                    <Image className="Omakuva" src="./images/omakuva.jpeg" rounded />
                </Col>
            </Row>
        </>
    )
}

export default Header
