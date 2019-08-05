import React, { Component } from 'react';
import '../Button.css';

class WhiteWoman extends Component {
    getStyle = () => {
        return {
            width: '25vh',
            height: '25vh'
        }
    }

    render(){
    
            return (
                <img src={ this.props.whitewoman.photo } alt={ this.props.whitewoman.name} style={this.getStyle()} onClick={this.props.femHandleBtnClick.bind(this, this.props.whitewoman.id)} class="button"></img>
            )
    
    }
}

export default WhiteWoman;