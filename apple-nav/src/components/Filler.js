import React from "react";
import logo from '../logo.svg';

const Filler = props => {
    return (
        <div className="below-header">

            <section className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </section>
        </div>
    );
}

export default Filler;