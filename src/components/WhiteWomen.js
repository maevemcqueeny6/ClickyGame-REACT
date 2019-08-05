import React, { Component } from 'react';
import WhiteWoman from './WhiteWoman';
import PropTypes from 'prop-types';


class WhiteWomen extends Component {
    
    render (){
       
        return this.props.whitewomen.map((whitewoman) => (
            <WhiteWoman key= { whitewoman.id } whitewoman={whitewoman} femHandleBtnClick={ this.props.femHandleBtnClick }/>
        ))

    }
}


WhiteWomen.propTypes = {
    whitewomen: PropTypes.array.isRequired,
    femHandleBtnClick: PropTypes.func.isRequired,
}


export default WhiteWomen;