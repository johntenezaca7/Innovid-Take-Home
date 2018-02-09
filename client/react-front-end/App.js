import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {

    componentWillMount(){
        axios.get('/api/laptops').then(res => console.log('ress', res.data))
    }
    render(){
        return(
            <div className="main-display">
                <div className="header"></div>
                <div className="select">
                    <div>Item One</div>
                    <div>Item Two</div>
                </div>
            </div>
        )
    }
}

export default App;