import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Select extends Component {
    render(){
        return(
            <div className="Select-Display">
                <div className="Select">
                    <div className="Laptops">
                        <Link to="Laptops">
                          <img className="laptop-pic" src="https://image.ibb.co/dsu2Lc/stock_laptop.png" alt="laptop" />
                        </Link>
                    </div>
                    <div className="Health">
                        <Link to="Health">
                            <img className="health-pic" src="https://image.ibb.co/cv7YRH/output_3.png" alt="health" />
                        </Link>
                    </div>
                </div>
                <div className="Click-To">
                    <h1>Click to choose</h1>
                </div>
            </div>
        );
    }
}

export default Select;