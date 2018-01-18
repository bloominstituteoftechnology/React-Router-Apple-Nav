import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

class TopBar extends React.Component {
        render(){
        return (
            <div className="topBar navbar-wrapper"><tr>
                <Nav activeKey={1} className="navbar-nav">
                    <LinkContainer to="/"><NavItem>Home</NavItem></LinkContainer>
                    <LinkContainer to="/secrets"><NavItem>Secrets</NavItem></LinkContainer>
                    <LinkContainer to="/lies"><NavItem>Lies</NavItem></LinkContainer>
                    <LinkContainer to="/conspiracies"><NavItem>Conspiracies</NavItem></LinkContainer>
                </Nav>
            </tr></div>
        );
    }
}

function Secrets(){
    return (
        <div className="secrets navbar-wrapper"><tr>
            <Nav activeKey={2} className="navbar-nav">
                <LinkContainer to="/secrets/fbcheats"><NavItem>Facebook cheat codes</NavItem></LinkContainer>
                <LinkContainer to="/secrets/flying"><NavItem>This one weird trick allows you to fly!</NavItem></LinkContainer>
                <LinkContainer to="/secrets/crying"><NavItem>How to stop crying</NavItem></LinkContainer>
            </Nav>
        </tr></div>
    );
}

function Lies(){
    return (
        <div className="lies navbar-wrapper"><tr>
            <Nav activeKey={3} className="navbar-nav">
                <LinkContainer to="/lies/internet"><NavItem>The internet is a mass hallucination</NavItem></LinkContainer>
                <LinkContainer to="/lies/doctors"><NavItem>Doctors: what do they really know?</NavItem></LinkContainer>
                <LinkContainer to="/lies/motoroil"><NavItem>Can drinking motor oil make you live longer?</NavItem></LinkContainer>
            </Nav>
        </tr></div>
    );
}

function Conspiracies(){
    return (
        <div className="conspiracies navbar-wrapper"><tr>
            <Nav activeKey={4} className="navbar-nav">
                <LinkContainer to="/conspiracies/lizardskin"><NavItem>Lizardpeople skin care routines</NavItem></LinkContainer>
                <LinkContainer to="/conspiracies/flatsun"><NavItem>The sun is flat</NavItem></LinkContainer>
                <LinkContainer to="/conspiracies/birds"><NavItem>Are birds real?</NavItem></LinkContainer>
            </Nav>
        </tr></div>
    );    
}
function Blank(){
    return (
        <div className="blank">
            <h1>Content goes here</h1>
        </div>
    );
}

ReactDOM.render(
    <BrowserRouter>
    <div className="flexer">
        <TopBar />
        <Route path="/secrets" component={Secrets} />
        <Route path="/lies" component={Lies} />
        <Route path="/conspiracies" component={Conspiracies} />
        <Route path="/conspiracies/:title" component={Blank} />
        <Route path="/secrets/:title" component={Blank} />
        <Route path="/lies/:title" component={Blank} />
    </div>
</BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
