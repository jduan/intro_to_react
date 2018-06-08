import React from 'react';
import PropTypes from 'prop-types';

class SlapBet extends React.Component {
    static propTypes = {

    }

    constructor(props) {
        super(props);
        this.state = {
            slaps: 0,
        };
        this.incrementSlaps = this.incrementSlaps.bind(this);
    }

    incrementSlaps() {
        this.setState(oldState => ({
            slaps: oldState.slaps + 1,
        }))
    }

    render() {
        return (
            <div>
                <p>Number of slaps: {this.state.slaps}</p>
                <button onClick={this.incrementSlaps}>Slap me</button>
            </div>
        )
    }
}

export default SlapBet;
