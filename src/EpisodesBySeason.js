import React from 'react';
import PropTypes from 'prop-types';

class EpisodesBySeason extends React.Component {
    static propTypes = {
        episodes: PropTypes.array,
    }

    constructor(props) {
        super(props);

        this.state = {
            titles: this.props.episodes.map(episode => episode["title"]),
        };
        this.filterBySeason = this.filterBySeason.bind(this);
    }

    filterBySeason(season) {
        return () => {
            console.log("calling filterBySeason");
            this.setState(oldState => {
                titles: this.props.episodes.
                filter(episode => episode["season"] != season).
                map(episode => episode["title"])
            })
        }
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.titles.map(
                        title => <li key={title}>{title}</li>
                    )}
                </ul>
                <button onClick={this.filterBySeason(1)}>Show</button>
            </div>
        )
    }
}

export default EpisodesBySeason;
