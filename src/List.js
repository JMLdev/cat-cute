import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

import Graph from './Components/Graph';

class List extends Component {

    hotOrNot = (vote) => {
        if (vote === 1) {
            return 'success';
        }
    }

    render() {
        const kitties = this.props.list.map((cat) => {
            return (
                <ListGroupItem key={cat.image.id} color={this.hotOrNot(cat.value)} >
                    <img src={cat.image.url} alt={cat.image.id} style={{paddingRight: '20px', display: 'inline-block', maxWidth: '150px'}} />
                    <p><span className="cat-name">{cat.image.id}</span></p>
                </ListGroupItem>
            )
        })
        return (
            <React.Fragment>
                <Graph tally={this.props.tally} />
                <Row>
                    <Col>
                        <ListGroup className="cat-list">
                            { kitties }
                        </ListGroup>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default List;