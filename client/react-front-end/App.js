import React, { Component } from 'react';
import axios from 'axios';


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
                <div className="Header">
                    <img className="best-buy-logo" src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Best_Buy_Logo.svg" alt="logo" />
                </div>
                <div className="Select">
                    <div className="Laptops">
                      <img className="laptop-pic" src="https://image.ibb.co/dsu2Lc/stock_laptop.png" alt="laptop" />
                    </div>
                    <div className="Health">
                        <img className="health-pic" src="https://image.ibb.co/cv7YRH/output_3.png" alt="health" />
                    </div>
                </div>
                <div className="Click-To">
                    <h1>Click to choose</h1>
                </div>
            </div>
        )
    }
}

export default App;