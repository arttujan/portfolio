import React from 'react'
import { Col, Card, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <Row className='mb-4'>
           
            <Col className='col-md-6'>
            <Card className="border-0 mb-4">
              <Card.Body>
                <Card.Title><strong>Education</strong></Card.Title>

                  <Card.Subtitle className="mb-2 mt-5 text-muted">Jyväskylän Lyseo secondary school graduate</Card.Subtitle>
                    <Card.Text className="CardText">
                      2012 - 2015
                    </Card.Text>
                
                  <Card.Subtitle className="mb-2 mt-4 text-muted">Savonia AMK Bachelor of Engineering, Software Engineering</Card.Subtitle>
                    <Card.Text className="CardText">
                      Jan. 2018 - May 2022
                    </Card.Text>

              </Card.Body>
            </Card>
          </Col>
          <Col className='col-md-6'>
            <Card className="border-0 mb-4">
              <Card.Body>
                <Card.Title><strong>References</strong></Card.Title>

                <Card.Subtitle className="mb-2 mt-5 text-muted">Antti Nikku - Kaste Oy</Card.Subtitle>
                <Card.Text className="CardText">antti.nikku@kaste.app</Card.Text>
                
                <Card.Subtitle className="mb-2 mt-4 text-muted">Sari Lehtonen - Ahjokeskuksen Parturikampaamo</Card.Subtitle>
                <Card.Text className="CardText">sari.lehtonen@tintti.net</Card.Text>

              </Card.Body>
            </Card>
          </Col>
        </Row>
    )
}

export default Footer