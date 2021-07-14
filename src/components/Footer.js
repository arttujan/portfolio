import React from 'react'
import { Col, Card } from 'react-bootstrap'

const Footer = () => {
    return (
        <>
            <h6><strong>References</strong></h6>
                <Col xs={6}>
                    <Card className="border-0">
                    <Card.Body>
                        <Card.Subtitle>Antti Nikku - Kaste Oy</Card.Subtitle>
                        <Card.Text className="mb-2 text-muted">antti.nikku@kaste.app</Card.Text>
                    </Card.Body>
                    </Card>
                </Col>

                <Col xs={6}>
                    <Card className="border-0">
                    <Card.Body>
                        <Card.Subtitle>Sari Lehtonen - Ahjokeskuksen Parturikampaamo</Card.Subtitle>
                        <Card.Text className="mb-2 text-muted">sari.lehtonen@tintti.net</Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
        </>
    )
}

export default Footer