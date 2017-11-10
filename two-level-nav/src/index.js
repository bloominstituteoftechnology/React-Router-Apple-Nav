import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import NavBMac from './Components/NavBMac';
import NavBiPad from './Components/NavBiPad';
import NavBiPhone from './Components/NavBiPhone';
import iPadAccessories from './Components/iPadAccessories';
import iPadiPad from './Components/iPadiPad';
import iPadiPadPro from './Components/iPadiPadPro';
import iPhone7 from './Components/iPhone7';
import iPhone8 from './Components/iPhone8';
import iPhoneX from './Components/iPhoneX';
import MacBook from './Components/MacBook';
import MacBookPro from './Components/MacBookPro';
import MaciMac from './Components/MaciMac';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Router>
    <div>
        <Route path="/" component={App}/>
        <Route path="/mac" component={NavBMac}/>
        <Route path="/iPad" component={NavBiPad}/>
        <Route path="/iPhone" component={NavBiPhone}/>
        
        <Route path="/iPad/iPadAccessories" component={iPadAccessories}/>
        <Route path="/iPad/iPad" component={iPadiPad}/>
        <Route path="/iPad/iPadPro" component={iPadiPadPro}/>

        <Route path="/iPhone/iPhone7" component={iPhone7}/>
        <Route path="/iPhone/iPhone8" component={iPhone8}/>
        <Route path="/iPhone/iPhoneX" component={iPhoneX}/>

        <Route path="/Mac/MacBook" component={MacBook}/>
        <Route path="/Mac/MacBookPro" component={MacBookPro}/>
        <Route path="/Mac/iMac" component={MaciMac}/>        
    </div>
</Router>
, document.getElementById('root'));
registerServiceWorker();
