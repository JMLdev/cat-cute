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
            listVotes: {},
            tally: {
                1: 0,
                0: 0
            }
        };
        this.updateVoteCount = this.updateVoteCount.bind(this);
    }
    // get the total votes for cute or crap
    getCute(cuteOrCrap) {
        let cute = 0;
        for (let key in this.state.listVotes) {
            if (typeof key !== "undefined") {
                if (this.state.listVotes[key].value === cuteOrCrap) {
                    cute++;
                }
            }
        }
        return cute;
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
            // set the state to new object with merged values
            this.setState({ listCats : catList })
            // create a new object for tally
            let newTally = {
                1: this.getCute(1),
                0: this.getCute(0)
            }
            // set the tally to the new values
            this.setState({ tally : newTally });
        })
    }

    updateVoteCount(kitty, newValue) {
        let oldKitty = this.state.theCats[kitty];
        let oldKittyValue = oldKitty.value;
        let newKitty = oldKitty.value = newValue;
        if (oldKittyValue !== newValue) {
            this.setState({oldKitty: newKitty})
        }
        console.log(this.state.theCats[kitty].value)
    }

    render() {
        return <Switch>
            <Route exact path="/" render={props => <Home {...props} list={this.state.theCats} tally={this.state.tally} />} />
            <Route path="/rate" render={props => <Rate {...props} list={this.state.theCats} tally={this.state.tally} updateVoteCount={this.updateVoteCount} />} />
            <Route path="/list" render={props => <List {...props} list={this.state.theCats} tally={this.state.tally} />} />
          </Switch>;
    }
}

export default App;