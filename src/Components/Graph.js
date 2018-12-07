import React, { Component } from 'react';
import { Row, Col, Progress } from 'reactstrap';

class Graph extends Component {
    render() {
        return (
            <Row style={{marginBottom: '24px'}}>
                <Col>
                    <h2>
                        Status so far:
                    </h2>
                    <div>Cute</div>
                    <Progress value={70} />
                    <div>Crap</div>
                    <Progress value={20} color={"danger"} />
                </Col>
            </Row>
        )
    }
}

export default Graph;