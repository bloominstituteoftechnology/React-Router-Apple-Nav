import React from 'react';
const Home = (props) => {
    console.log('props', props);
    return <h2>Hello from  path: {props.match.path}  </h2>;
    
}

export default Home;