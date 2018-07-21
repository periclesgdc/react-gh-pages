import React from 'react';
import PropTypes from 'prop-types';

export default function Message(props) {
    return(
        <h3 style={{
            marginLeft: 10+'px',
            color: props.color
        }}> {props.content} </h3>
    );
}
  
Message.propTypes = {
    content: PropTypes.string.isRequired,
};