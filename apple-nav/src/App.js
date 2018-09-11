import React, { Component } from "react";
import NavWrapper from "./components/NavWrapper";

class App extends Component {
  state = {
    links: [
      {
        name: "Mac"
      },
      {
        name: "iPod"
      },
      {
        name: "iPhone"
      },
      {
        name: "Watch"
      },
      {
        name: "TV"
      },
      {
        name: "Music"
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <NavWrapper links={this.state.links} />
      </div>
    );
  }
}

export default App;
