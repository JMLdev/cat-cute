import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

import Graph from './Components/Graph';

const list = [
    {
        name: 'kitten',
        src: 'https://placekitten.com/150/150',
        text: 'bla bla bla, something words, lyrics. A song!'
    },
    {
        name: 'kitten',
        src: 'https://placekitten.com/150/150',
        text: 'bla bla bla, something words, lyrics. A song!'
    },
    {
        name: 'kitten',
        src: 'https://placekitten.com/150/150',
        text: 'bla bla bla, something words, lyrics. A song!'
    }
]

class List extends Component {
    render() {
        return (
            <React.Fragment>
                <Graph />
                <Row>
                    <Col>
                        <ListGroup class="cat-list">
                            {
                                list.map(
                                    cat =>
                                    <ListGroupItem>
                                        <img src={cat.src} alt={cat.name} style={{paddingRight: '20px', display: 'inline-block'}} />
                                        <p><span class="cat-name">{cat.name}</span>: {cat.text}</p>
                                    </ListGroupItem>
                                )
                            }
                        </ListGroup>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default List;