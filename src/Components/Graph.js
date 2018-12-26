import React, { Component } from 'react';
import { Row, Col, Progress } from 'reactstrap';

class Graph extends Component {
    // takes a prop of 0 or 1. 1 is cute, 0 is not
    // returns the number of cute or not as specified by prop when calling 
    getCute(cuteOrCrap) {
        let cute = 0;
        for (let key in this.props.list) {
            if (typeof key !== "undefined") {
                if (this.props.list[key].value === cuteOrCrap) {
                    cute++;
                }
            }
        }
        return cute;
    }

    // returns the number of cute cats out of the list. 1 is cute, 0 is not
    returnCute() {
        return Math.floor(this.getCute(1) / (this.getCute(1) + this.getCute(0)) * 100)
    }

    // returns the number of crappy cats
    returnCrap() {
        return Math.floor(this.getCute(0) / (this.getCute(1) + this.getCute(0)) * 100)
    }

    render(props) {
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