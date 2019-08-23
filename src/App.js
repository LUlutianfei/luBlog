import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './home/Home';
import New from './new/New';
import Demo from './demo/Demo';
import Mood from './mood/Mood';
import Image from './image/Image';


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
