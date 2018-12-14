import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

import Graph from './Components/Graph';
import * as API from './Utilities/ApiResult';

class List extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            theCats: [],
            listCats: {},
            listVotes: {}
        };
    }

    componentDidMount() {
        API.getCats().then(res => {
            this.setState({ 
                theCats : res.data,
                listCats: res.data
            });
        });
        API.getVotes().then(res => {
            this.setState({
                listVotes: res.data
            });
        });
    }

    render() {
        let prettyKitties = () =>{
            // loop the top level objects
            for (let key in this.state.listVotes) {
                // loop each key
                for (let subkey in this.state.listVotes) {
                    if (this.state.listVotes.hasOwnProperty(subkey)) {
                        if (typeof this.state.listVotes[key].value !== 'undefined') {
                            let id = this.state.listVotes[key].image_id;
                            let vote = this.state.listVotes[key].value;
                            for (let key in this.state.listCats) {
                                for (let subkey in this.state.listCats) {
                                    if (this.state.listCats[key].image_id === id) {
                                        this.state.listCats[key].value = vote;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            console.log(this.state.listCats);
        }
        const kitties = this.state.theCats.map((cat) => {
            return (
                <ListGroupItem key={cat.image.id}>
                    <img src={cat.image.url} alt={cat.image.id} style={{paddingRight: '20px', display: 'inline-block', maxWidth: '150px'}} />
                    <p><span className="cat-name">{cat.image.id}</span></p>
                </ListGroupItem>
            )
        })
        return (
            <React.Fragment>
                {prettyKitties()}
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