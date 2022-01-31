import React from "react";
import propTypes from 'prop-types';

const FunComBotton = (props) => {
    return (
        <button onClick={props.handleClick}>
            {props.texto}
        </button>
    );
}

FunComBotton.propTypes = {
/*     texto: propTypes.string.isRequired,
    handleClick: propTypes.func.isRequired  */
}

export default FunComBotton;