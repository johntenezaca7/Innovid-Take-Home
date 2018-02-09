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
        console.log('props', this.props.data)
        return(
            <div className="Health-Info">
              <div>{this.state.current.names.title}</div>
                <img src={this.state.current.images.standard} alt="picture" />
                <div>
                price: ${this.state.current.prices.current}
                </div>
                <div>
                description: {this.state.current.descriptions.short}
                </div>
                <div>
                    <a href={this.state.current.links.web}>
                    SHOP NOW
                    </a>
                </div>
                <button onClick={this.onRightClick.bind(this)}>Right</button>
                <button onClick={this.onLeftClick.bind(this)}>Left</button>
    
            </div>
        )
    }
}

export default Health;