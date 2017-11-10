import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom';

//STYLE============================================

const styles = {
    textAlign: 'center',
    fontFamily: 'sans-serif',
}

const linkStyles = {
    padding: '2rem',
    textDecoration: 'none',
    fontWeight: 'bold',
    color: 'gray',
    backgroundColor: 'black',
}

const contentStyles = {
    color: 'blue',
    padding: '5rem',
}

//RENDER============================================
  
const App = () => (
    <div style={styles}>
         <Navigation />
        <Route exact path="/" component={Hello}/>
        <Route path="/ipad" component={iPad}/>
            <Route path="/ipad/yes" component={iPadYes}/>
            <Route path="/ipad/no" component={iPadNo}/>
        <Route path="/iphone" component={iPhone}/>
            <Route path="/iphone/yes" component={iPhoneYes}/>
            <Route path="/iphone/no" component={iPhoneNo}/>
        <Route path="/tv" component={Tv}/>
            <Route path="/tv/yes" component={TvYes}/>
            <Route path="/tv/no" component={TvNo}/>
    </div>
);

//CONTENTS============================================ 

const Hello = () => <h1 style={contentStyles}>WASSSSSSSSSSUP</h1>
const iPad = () => (
    <div>
        <h1 style={contentStyles}>WANT AN IPAD?</h1>
        <Link style={linkStyles} to="/ipad/yes">YES PLEASE</Link>
        <Link style={linkStyles} to="/ipad/no">NO THANKS</Link>
    </div>
);
const iPhone = () => 
    <div>
        <h1 style={contentStyles}>WANT A PHONE?</h1>
        <Link style={linkStyles} to="/iphone/yes">YES PLEASE</Link>
        <Link style={linkStyles} to="/iphone/no">NO THANKS</Link>
    </div>
const Tv = () => 
    <div>
        <h1 style={contentStyles}>WANT A TV?</h1>
        <Link style={linkStyles} to="/tv/yes">YES PLEASE</Link>
        <Link style={linkStyles} to="/tv/no">NO THANKS</Link>
    </div>

//SUB-CONTENTS============================================

const iPadYes = () => (
    <div>
        <h1 style={contentStyles}>HERE YOU GO!</h1>
        <img src={ require('./image1.png')}/>
    </div>
);
const iPadNo = () => (
    <div>
        <h1 style={contentStyles}>BUMMER...</h1>
        <img src={ require('./image2.jpg')}/>
    </div>
);
const iPhoneYes = () => (
    <div>
        <h1 style={contentStyles}>HERE YOU GO!</h1>
        <img src={ require('./image3.jpg')}/>
    </div>
);
const iPhoneNo = () => (
    <div>
        <h1 style={contentStyles}>BUMMER...</h1>
        <img src={ require('./image4.jpg')}/>
    </div>    
);
const TvYes = () => ( 
    <div>
        <h1 style={contentStyles}>HERE YOU GO!</h1>
        <img src={ require('./image5.jpg')}/>
    </div>    
);
const TvNo = () => ( 
    <div>
        <h1 style={contentStyles}>BUMMER...</h1>
        <img src={ require('./image6.jpg')}/>
    </div>    
);

//LINKS============================================

const Navigation = () => {
    return (
        <div>
            <Link style={linkStyles} to="/">Home</Link>
            <Link style={linkStyles} to="/ipad">iPad</Link>
            <Link style={linkStyles} to="/iphone">iPhone</Link>
            <Link style={linkStyles} to="/tv">Apple TV</Link>
        </div>
    )
}

//============================================


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'));

