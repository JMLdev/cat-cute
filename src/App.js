/*eslint no-unused-vars: 0*/
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from './Home';
import Rate from './Rate';
import List from './List';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/rate' component={Rate}/>
                <Route path='/list' component={List}/>
            </Switch>
        );
    }
}

export default App;
