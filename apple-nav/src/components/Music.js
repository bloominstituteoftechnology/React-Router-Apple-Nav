import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Music extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                {this.props.musics.map(music => <Link to={`/music/${music}`} key={music}>{music}</Link>)}
            </div>
        )
    }
};

export default Music;