import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import Home from '../Home/Home';
import './Support.css';
import {FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

class Form extends React.Component {

  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
        >
          <FormControl
            type="text"
            placeholder="Search Support"
          />
          <FormControl.Feedback />
        </FormGroup>
      </form>
    );
  }
};

class TV extends React.Component {
  render() {
		return (
			<div>
				<Home />
				<div className="container">
					Welcome to Apple Support
					<Form />
				</div>
			</div>
		);
  }
}

export default TV;