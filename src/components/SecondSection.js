import React from 'react'
import { Col, Card } from 'react-bootstrap'

const SecondSection = () => {
    return (
        <>
          <Col className="col-md-6">
          <Card className="border-0">
              <Card.Body>
                <Card.Title><strong>Work</strong></Card.Title>

                  <Card.Subtitle className="mb-2 mt-5"><strong>Ahjokeskuksen Parturi-Kampaamo Homepage (Freelance)</strong></Card.Subtitle>
                    <Card.Text className="CardText">
                      Oct. 2020 - Dec. 2020
                    <Card.Link className="CardText" href="https://www.ahjokeskuksenpk.fi/"><strong>ahjokeskuksenpk.fi</strong></Card.Link>
                    </Card.Text>

                  <Card.Subtitle className="mb-2 mt-4"><strong>Page for respiratory mechanics researchers</strong></Card.Subtitle>
                    <Card.Text className="CardText">
                      Feb. 2021 - March 2021
                    <Card.Link className="CardText" href="https://www.hengitysmekaniikka.fi/"><strong>hengitysmekaniikka.fi</strong></Card.Link>
                    </Card.Text>

                  <Card.Subtitle className="mb-2 mt-4"><strong>Mobile development consulting for Sense4Health Oy</strong></Card.Subtitle>
                    <Card.Text className="CardText">
                      Feb. 2021 - May 2021
                    </Card.Text>
                    
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-md-6">
          <Card className="border-0">
              <Card.Body>

                  <Card.Subtitle className="mb-2 mt-4"><strong>One of the founders of Kaste</strong></Card.Subtitle>
                    <Card.Text className="CardText">
                      Jan. 2020 - today
                      <Card.Link className="CardText" href="https://www.kaste.info/"><strong>kaste.info</strong></Card.Link>
                    </Card.Text>

                  <Card.Subtitle className="mb-2 mt-4"><strong>Kaste Oy Software developer</strong></Card.Subtitle>
                    <Card.Text className="CardText">
                      Jan. 2021 - Aug. 2021
                     <Card.Link className="CardText"><strong>Software developer</strong></Card.Link>
                    </Card.Text>

                  <Card.Subtitle className="mb-2 mt-4"><strong>Web developer at Prospectum Oy</strong></Card.Subtitle>
                    <Card.Text className="CardText">
                      Aug. 2021 - today
                      <Card.Link className="CardText" href="https://prospectum.fi/"><strong>Prospectum</strong></Card.Link>
                    </Card.Text>
                    
              </Card.Body>
            </Card>
          </Col>
        </>
    )
}

export default SecondSection