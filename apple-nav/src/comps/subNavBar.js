import React from 'react';
import {SubTab} from './subTab.js';
import './subNavBar.scss';
import {TweenLite, CSSPlugin} from 'gsap/all';

class SubNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.subTabs = [];
  }

  componentDidMount() {
    this.myTween();
  }

  componentDidUpdate() {
    this.myTween();
  }

  myTween = props => {
    console.log('subNav clicked');
    if (this.props.clicked === true) {
      TweenLite.fromTo(this.subTabs, 1, {opacity: 0}, {opacity: 1});
    } else {
      return null;
    }
  };

  render() {
    return (
      <div className="subNav">
        <div className="subNavBar" ref={div => (this.subTabs = div)}>
          {this.props.data.map(mainTab => {
            return (
              <SubTab
                {...this.props}
                name={mainTab.name}
                products={mainTab}
                key={`${mainTab.name}, subTab`}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

// const SubNavBar = props => {
//   return (
//     <div className="subNavBar">
//       {props.data.map(mainTab => {
//         return (
//           <SubTab
//             {...props}
//             name={mainTab.name}
//             products={mainTab}
//             key={`${mainTab.name}, subTab`}
//           />
//         );
//       })}
//     </div>
//   );
// };
//
export default SubNavBar;
