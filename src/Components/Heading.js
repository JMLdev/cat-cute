import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

export class Heading extends Component<any> {

    render() {
        return (
            <Row style={{marginBottom: '64px', marginTop: "24px"}}>
                <Col>
                    <h1>
                        {this.props.heading}
                    </h1>
                </Col>
            </Row>
        )
    }
}

export default Heading;