import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

import Graph from './Components/Graph';
import * as API from './Utilities/ApiResult';

class List extends Component {

    constructor(props) {
        super(props);
        this.state = { testCats: [] };
    }

    componentDidMount(){
        API.getCats().then(res => {
            this.setState({ 
                testCats : res.data 
            });
        });
    }

    render() {

        const kitties = this.state.testCats.map((cat) => {
            return (
                <ListGroupItem key={cat.image.id}>
                    <img src={cat.image.url} alt={cat.image.id} style={{paddingRight: '20px', display: 'inline-block', maxWidth: '150px'}} />
                    <p><span className="cat-name">{cat.image.id}</span></p>
                </ListGroupItem>
            )
        })
        return (
            <React.Fragment>
                <Graph />
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