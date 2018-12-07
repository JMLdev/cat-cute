import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import Graph from './Components/Graph';
import Heading from './Components/Heading';
import Carousel from './Components/Carousel';

class Rate extends Component {
    render() {
        return (
            <React.Fragment>
                <Heading heading='Rate the kitties' />
                <Graph />
                <Row>
                    <Col sm={12} >
                        <Carousel />
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Rate;
