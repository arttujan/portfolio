import React from 'react'
import '../App.css';
import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap'

const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
    Go to homepage
    </Tooltip>
);

const Header = () => {
    return (
        <>  
            {/* Badge ja nimi */}
            <Row className="whoami">
                <Col xs={12}>
                <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
                >
                    <a className="MenuLink" href="/">whoami</a>
                </OverlayTrigger>
                </Col>
            </Row>
            <Row className="justify-content-md-center menu">
                <Col xs={0} sm={2}></Col>
                <Col xs={3} sm={2}><a className="MenuLink" href="/work">/Work</a></Col>
                <Col xs={3} sm={2}><a className="MenuLink" href="/skills">/Skills</a></Col>
                <Col xs={3} sm={2}><a className="MenuLink" href="/education">/Education</a></Col>
                <Col xs={3} sm={2}><a className="MenuLink" href="/interests">/Interests</a></Col>
                <Col xs={0} sm={2}></Col>
            </Row>
        </>
    )
}

export default Header
