import React from 'react';
import { Link } from 'react-router-dom';

const AppleV = (props) => {
  return (
    <div>
        {props.musics.map(music => <Link to={`/musics/${music}`} key={music}>{music}</Link>)}
    </div>
  );
}

export default AppleV;