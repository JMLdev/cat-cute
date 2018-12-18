import React, { Component } from 'react';
import { Row, Col, Progress } from 'reactstrap';

class Graph extends Component {

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

    returnCute() {
        return Math.floor(this.getCute(1) / (this.getCute(1) + this.getCute(0)) * 100)
    }

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