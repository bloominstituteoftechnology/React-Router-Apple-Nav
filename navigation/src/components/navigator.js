import { Link } from 'react-router-dom';
import React from 'react';
import './navigator.css';

const macs = [
  'MacBook',
  'MacBook Air',
  'MacBook Pro',
  'iMac',
  'iMac',
  'Mac Pro',
  'Mac mini',
  'Accessories',
  'High Sierra',
  'Compare',
];

const ipads = [
  'iPad Pro',
  'iPad',
  'iPad Mini',
  'iPad mini 4',
  'iOS 11',
  'Accessories',
  'Compare',
];

const iphones = [
  'iPhone X',
  'iPhone 8',
  'iPhone 7',
  'iPhone 6s',
  'iPhone SE',
  'iOS11',
  'Accessories',
  'Compare',
];

const watches = [
  'Apple Watch Series 3',
  'Apple Watch Nike+',
  'Apple Watch Hermes',
  'Apple Watch Edition',
  'Apple Watch Series 1',
  'watchOS',
  'Bands',
  'Accessories',
  'Compare',
];

const tvs = ['Apple TV 4K', 'Apple TV', 'TV App', 'Accessories', 'Compare'];

const music = [
  'Apple Music',
  'iTunes',
  'HomePod',
  'iPod touch',
  'Music Accessories',
  'Gift Cards',
];

const support = ['Support'];

const Macs = () => {
  return (
    <div className="sub-styles">
      {macs.map(product => {
        return (
          <Link className="sub-style" to={`/mac/${product}`} key={product}>
            {' '}
            {product}{' '}
          </Link>
        );
      })}
    </div>
  );
};

const Ipads = () => {
  return (
    <div className="sub-styles">
      {ipads.map(product => {
        return (
          <Link className="sub-style" to={`/ipads/${product}`} key={product}>
            {' '}
            {product}{' '}
          </Link>
        );
      })}
    </div>
  );
};

const Iphones = () => {
  return (
    <div className="sub-styles">
      {iphones.map(product => {
        return (
          <Link className="sub-style" to={`/iphone/${product}`} key={product}>
            {' '}
            {product}{' '}
          </Link>
        );
      })}
    </div>
  );
};

const Watches = () => {
  return (
    <div className="sub-styles">
      {watches.map(product => {
        return (
          <Link className="sub-style" to={`/watch/${product}`} key={product}>
            {' '}
            {product}{' '}
          </Link>
        );
      })}
    </div>
  );
};

const TVs = () => {
  return (
    <div className="sub-styles">
      {tvs.map(product => {
        return (
          <Link className="sub-style" to={`/tv/${product}`} key={product}>
            {' '}
            {product}{' '}
          </Link>
        );
      })}
    </div>
  );
};

const MusicList = () => {
  return (
    <div className="sub-styles">
      {music.map(product => {
        return (
          <Link className="sub-style" to={`/music/${product}`} key={product}>
            {' '}
            {product}{' '}
          </Link>
        );
      })}
    </div>
  );
};

const Supports = () => {
  return (
    <div className="sub-styles">
      {support.map(product => {
        return (
          <Link className="sub-style" to={`/support/${product}`} key={product}>
            {' '}
            {product}{' '}
          </Link>
        );
      })}
    </div>
  );
};

const Mac = ({ match }) => {
  return <div className="pages">Mac{match.params.name}</div>;
};

const Ipad = ({ match }) => {
  return <div className="pages">iPads{match.params.name}</div>;
};

const Iphone = ({ match }) => {
  return <div className="pages">iPhones{match.params.name}</div>;
};

const Watch = ({ match }) => {
  return <div className="pages">Watches{match.params.name}</div>;
};

const TV = ({ match }) => {
  return <div className="pages">TVs{match.params.name}</div>;
};

const Music = ({ match }) => {
  return <div className="pages">Music{match.params.name}</div>;
};

const Support = ({ match }) => {
  return <div className="pages">Support{match.params.name}</div>;
};

export {
  Macs,
  Mac,
  Ipads,
  Ipad,
  Iphones,
  Iphone,
  Watches,
  Watch,
  TVs,
  TV,
  MusicList,
  Music,
  Supports,
  Support,
};
