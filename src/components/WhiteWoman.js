import React, { Component } from 'react';

class WhiteWoman extends Component {
    getStyle = () => {
        return {
            width: '25vh',
            height: '25vh'
        }
    }

    render(){
    
            return (
                <button onClick={this.props.femHandleBtnClick.bind(this, this.props.whitewoman.id)}>
                <img src={ this.props.whitewoman.photo } alt={ this.props.whitewoman.name} style={this.getStyle()}></img>
                </button>
            )
    
    }
}

export default WhiteWoman;