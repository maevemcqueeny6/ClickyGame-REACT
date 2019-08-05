import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WhiteMan extends Component {
    getStyle = () => {
        return {
            width: '35vh',
            height: '35vh'
        }
    }

    render(){
    
            return (
                <button onClick={this.props.handleBtnClick.bind(this, this.props.whiteman.id)}>
                <img src={ this.props.whiteman.photo } alt={ this.props.whiteman.name} style={this.getStyle()}></img>
                </button>
            )
    
    }
}

// Proptypes
WhiteMan.propTypes = {
    whiteman: PropTypes.object.isRequired,
    handleBtnClick: PropTypes.func.isRequired,

}


export default WhiteMan;