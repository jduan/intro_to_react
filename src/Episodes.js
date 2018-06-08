// import from episodes.json
// make a list of items that has episode title and season
// get it display on your page

// questions:
// what props?
// is your render function pure?
// where should the data be loaded in?

import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    name: PropTypes.Array,
};

const ListItems = ({episodes}) => (
    <ul>
        {episodes.map(episode => <li>{episode.season}, {episode.title}</li>)}
    </ul>
);

ListItems.propTypes = propTypes;
export default ListItems;
