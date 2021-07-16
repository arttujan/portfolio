import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react';

const Education = () => {
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
