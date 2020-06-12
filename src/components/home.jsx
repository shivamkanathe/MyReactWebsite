import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {Jumbotron, Container, Row, Col, Image, Button} from 'react-bootstrap';
import './home.css';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h2>Welcome to Groomer</h2>
                    <p className="para">Be ready without waiting.</p>
                
                </Jumbotron>
                <Row className="show-container text-center">
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src= "assets/person-1.jpg" roundedCircle className="profile-pic"/>
                        <h3>Frank</h3>
                        <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src= "assets/person-2.jpg" roundedCircle className="profile-pic"/>
                        <h3>Vanessa</h3>
                        <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src= "assets/person-3.jpg" roundedCircle className="profile-pic"/>
                        <h3>Riffi</h3>
                        <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
                    </Col>
                </Row>

            </Container>
        )
    }
}
