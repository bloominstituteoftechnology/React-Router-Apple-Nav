import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeData: props.data,
    }
  }
  
  render() {
    return (
      <nav>
        <h1>{this.state.homeData}</h1>
      </nav>
    );
  }
};

export default Home;