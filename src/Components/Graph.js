import React, { Component } from 'react';
import { Row, Col, Progress } from 'reactstrap';

class Graph extends Component {

    // returns the number of cute cats out of the list. 1 is cute, 0 is not
    returnCute() {
        return Math.floor(this.props.tally[1] / (this.props.tally[1] + this.props.tally[0]) * 100)
    }

    // returns the number of crappy cats
    returnCrap() {
        return Math.floor(this.props.tally[0] / (this.props.tally[1] + this.props.tally[0]) * 100)
    }

    render() {
        return (
            
            <Row style={{marginBottom: '24px'}}>
                <Col>
                    <h2>
                        Status so far:
                    </h2>
                    <div>Cute</div>
                    <Progress value={this.returnCute()} color={"success"} />
                    <div>Crap</div>
                    <Progress value={this.returnCrap()} color={"danger"} />
                </Col>
            </Row>
        )
    }
}

export default Graph;