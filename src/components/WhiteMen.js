import React, { Component } from 'react';
import WhiteMan from './WhiteMan';
import '../Button.css'

import PropTypes from 'prop-types';

class WhiteMen extends Component {
    
    render (){
       
        return this.props.whitemen.map((whiteman) => (
            <WhiteMan class="button" key= { whiteman.id} whiteman={whiteman} handleBtnClick={ this.props.handleBtnClick }/>
        ))

    }
}

// PropTypes
WhiteMen.propTypes = {
    whitemen: PropTypes.array.isRequired,
    handleBtnClick: PropTypes.func.isRequired,
}

export default WhiteMen;