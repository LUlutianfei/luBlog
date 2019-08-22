import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './Home';
import New from './New';
import Demo from './Demo';
import Mood from './Mood';
import Image from './Image';


class App extends Component {
    render() {
        return (
            <Router>

                <Route exact path="/" component={ Home } />
                <Route exact path="/New" component={ New } />
                {/*<Route path="/Product/:id" component={ ProductV2 } />*/}
                <Route path="/Demo" component= { Demo } />
                <Route path="/Mood" component= { Mood } />
                <Route path="/Image" component= { Image } />
            </Router>
        )
    }
}

export default App
