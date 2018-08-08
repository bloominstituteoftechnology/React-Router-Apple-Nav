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
      <div>
        <h1>{this.state.homeData}</h1>
      </div>
    );
  }
};

export default Home;