import React, { Component } from 'react';
import WhiteMan from './WhiteMan';
import PropTypes from 'prop-types';

class WhiteMen extends Component {
    
    render (){
// Of the 113 Supreme Court justices in US history, all but 6 have been white men. Can you tell these men apart?
       
        return this.props.whitemen.map((whiteman) => (
            <WhiteMan key= { whiteman.id} whiteman={whiteman} handleBtnClick={ this.props.handleBtnClick }/>
        ))

    }
}

// PropTypes
WhiteMen.propTypes = {
    whitemen: PropTypes.array.isRequired,
    handleBtnClick: PropTypes.func.isRequired,
}

export default WhiteMen;