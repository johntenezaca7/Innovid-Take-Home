import React, { Component } from 'react';
import { BrowserRouter, Route } from  'react-router-dom';
import axios from 'axios';

import Header from './components/Header';
import Select from './components/Select';
import Laptops from './components/Laptops';
import Health from './components/Health';

class App extends Component {
    constructor(props){
        super(props);

        this.state = { 
            laptops: [],
            healthFB: []
        }
    }

    componentWillMount(){
        axios.get('/api/laptops').then(res => this.setState({
            laptops: res.data.results
         }));
        axios.get('/api/healthFitB').then(res => this.setState({
            healthFB: res.data.results
        }));
    }
    render(){
        return(
            <div className="Main-Display">      
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route  exact path="/" component={Select}/>
                        <Route exact path="/Laptops" render={() => <Laptops data={this.state.laptops}/>} />
                        <Route exact path="/Health" render={() => <Health data={this.state.healthFB}/>} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;