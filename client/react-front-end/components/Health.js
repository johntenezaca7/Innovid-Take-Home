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
        const truncateTitle = (text) => {
            const short = text.indexOf(' ', 25);
            if( short === -1  ) return text; 

            return text.substring(0, short) 
        };

        const format = (text) => {
            return text.split(';').join('; \n');        
        };
        return(
            <div className="Info">
                <div className="Title">
                {truncateTitle(this.state.current.names.title)}
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
                        <div className="short-desc">
                            Description: <br />
                             {format(this.state.current.descriptions.short)}
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