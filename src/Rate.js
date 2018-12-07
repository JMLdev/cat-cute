import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Graph from './Components/Graph';
import Heading from './Components/Heading';
import Carousel from './Components/Carousel';

class Rate extends Component {
    render() {
        return (
            <Container>
                <Heading heading='Rate the kitties' />
                <Graph />
                <Row>
                    <Col sm={12} >
                        <Carousel />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Rate;
