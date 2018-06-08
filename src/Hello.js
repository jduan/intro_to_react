// prop: name
// Hello + name + Goodbye
// import it into your App.js and use it

import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    name: PropTypes.string,
};

const Greet = ({name}) => (
    <div>
        "Hello {name} Goodbye"
    </div>
);

Greet.propTypes = propTypes;
export default Greet;
