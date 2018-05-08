import React from "react";

class SubNav extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        From SubNav
        {this.props.items.map((item, index) => {
          return <div key={index}>{item.device.items[0]}</div>;
        })}
      </div>
    );
  }
}

export default SubNav;