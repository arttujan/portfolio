import React from 'react'
import { Row, Col, Card, Image } from 'react-bootstrap'
import { useState, useEffect } from 'react';

const Home = () => {
    // Set loading state to true initially
    const [loading, setLoading] = useState(true);
      
    useEffect(() => {
      // Loading function to load data or 
      // fake it using setTimeout;
      const loadData = async () => {
  
        // Wait for two second
        await new Promise((r) => setTimeout(r, 700));
  
        // Toggle loading state
        setLoading((loading) => !loading);
      };
        
      loadData();
    }, [])
      
    // If page is in loading state, display 
    // loading message. Modify it as per your 
    // requirement.
    if (loading) {
        return <div className="loading">Software development and desing</div>
    }
      
    // If page is not in loading state, display page.
    else return (
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
