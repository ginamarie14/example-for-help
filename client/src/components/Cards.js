import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import WoYellowTop from '../assets/img/shirts/adidas-w-yellow-top.webp';
// import { Router } from 'express';
import { useQuery } from '@apollo/client';
import { SideBar } from "./sideBar";
import { BrowserRouter as Router } from 'react-router-dom';

export const Cards = ({product}) => {
  const [activeLink, setActiveLink] = useState("all");
  const [scrolled, setScrolled] = useState(false);

  return (
    <section>
        <Router>
        <SideBar />
        </Router>
        <Row>
            <Col sm>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Button variant="primary">Check me out 👀</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm>
            <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Check me out 👀</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm>
            <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Check me out 👀</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col sm>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Check me out 👀</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm>
            <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Check me out 👀</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm>
            <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Check me out 👀</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col sm>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Check me out 👀</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm>
            <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Check me out 👀</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm>
            <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Check me out 👀</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </section>
  );
};

export default Cards;