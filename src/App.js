/*eslint no-unused-vars: 0*/
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from './Home';
import Rate from './Rate';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/rate' component={Rate}/>
            </Switch>
        );
    }
}

export default App;
