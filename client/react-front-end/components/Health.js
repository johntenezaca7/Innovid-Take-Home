import React, { Component } from 'react';


class Health extends Component{
    constructor(props){
        super(props);

        this.state = {
            idx: 0,
            current : this.props.data[0]
        }
    }
    onRightClick(){
        if(this.state.idx <= 5){
           this.state.idx += 1;
           let cur = this.state.idx;
           let next = this.props.data;
           this.setState({
               current: next[cur]
           })
        }
    }

    onLeftClick(){
        if(this.state.idx !== 0){
            this.state.idx -= 1;
            let cur = this.state.idx;
            let next = this.props.data;
            this.setState({
                current: next[cur]
            })
         }
    }

    render(){
        return(
            <div className="Info">
                <div className="Title">
                    {this.state.current.names.title}
                </div>
                <div className="divide-display">
                    <div className="left-button" onClick={this.onLeftClick.bind(this)}></div>
                    <div className="stock-photo">
                        <img src={this.state.current.images.standard} alt="picture" />
                    </div>
                    <div className="more-info">
                        <div className="Price">
                            Price: ${this.state.current.prices.current}
                        </div>
                        <div>
                            Description: <br />
                            {this.state.current.descriptions.short}
                        </div>
                        <button className="Shop">
                            <a href={this.state.current.links.web}>
                                Shop Now
                            </a>
                        </button>
                    </div>
                    <div className="right-button" onClick={this.onRightClick.bind(this)}></div>
                </div>
            </div>
        )
    }
}

export default Health;