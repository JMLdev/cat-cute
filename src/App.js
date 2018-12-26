/*eslint no-unused-vars: 0*/
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from './Home';
import Rate from './Rate';
import List from './List';
import * as API from './Utilities/ApiResult';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            theCats: [],
            listCats: {},
            listVotes: {}
        };
    }

    componentWillMount() {
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
        }).then(() => {
            let catList = Object.assign({}, this.state.listCats)
            // loop the top level objects
            for (let key in this.state.listVotes) {
                // loop each key
                for (let subkey in this.state.listVotes) {
                    if (this.state.listVotes.hasOwnProperty(subkey)) {
                        if (typeof this.state.listVotes[key].value !== 'undefined') {
                            let id = this.state.listVotes[key].image_id;
                            let vote = this.state.listVotes[key].value;
                            for (let key in catList) {
                                // eslint-disable-next-line
                                for (let subkey in catList) {
                                    if (catList[key].image_id === id) {
                                        catList[key].value = vote;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            this.setState({ listCats : catList })
        })
    }

    render() {
        return (
            <Switch>
                <Route exact path='/' 
                    render={(props) => <Home {...props} list={this.state.theCats} />}
                />
                <Route path='/rate' component={Rate}/>
                <Route 
                    path='/list' 
                    render={(props) => <List {...props} list={this.state.theCats} />}
                />
            </Switch>
        );
    }
}

export default App;
