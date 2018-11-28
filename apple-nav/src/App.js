import React, { Component } from 'react';
import Data from './data';
import styled, { createGlobalStyle } from '../node_modules/styled-components';
import PropTypes from 'prop-types';

import NavBar from './components/NavBar';

const GlobalStyle = createGlobalStyle`
html {
  font-size: 62.5%;
}
body{
  box-sizing: border-box;
  background: ${(props) => props.theme};
  margin: 0;
  }
`;

const AppContainer = styled.div`
	width: 100%;
`;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			color: 'bisque',
			colorOptions: [
				'coral',
				'orchid',
				'yellow',
				'yellowgreen',
				'paleturquoise',
				'slateblue',
				'plum',
				'lightpink',
				'sandybrown'
			]
		};
	}

	componentDidMount() {
		this.setState({
			data: Data
		});
	}

	handleClick = () => {
		return this.state.color === 'bisque'
			? this.setState({
					color: this.state.colorOptions[0]
			  })
			: this.state.color === this.state.colorOptions[0]
			? this.setState({
					color: this.state.colorOptions[1]
			  })
			: this.state.color === this.state.colorOptions[1]
			? this.setState({
					color: this.state.colorOptions[2]
			  })
			: this.state.color === this.state.colorOptions[2]
			? this.setState({
					color: this.state.colorOptions[3]
			  })
			: this.state.color === this.state.colorOptions[3]
			? this.setState({
					color: this.state.colorOptions[4]
			  })
			: this.state.color === this.state.colorOptions[4]
			? this.setState({
					color: this.state.colorOptions[5]
			  })
			: this.state.color === this.state.colorOptions[5]
			? this.setState({
					color: this.state.colorOptions[6]
			  })
			: this.state.color === this.state.colorOptions[6]
			? this.setState({
					color: this.state.colorOptions[7]
			  })
			: this.state.color === this.state.colorOptions[7]
			? this.setState({
					color: this.state.colorOptions[8]
			  })
			: this.state.color === this.state.colorOptions[8]
			? this.setState({
					color: this.state.colorOptions[0]
			  })
			: null;
	};

	render() {
		return (
			<React.Fragment>
				<GlobalStyle theme={this.state.color} />
				<AppContainer>
					<NavBar list={this.state.data} handleClick={this.handleClick} />
				</AppContainer>
			</React.Fragment>
		);
	}
}

export default App;

App.propTypes = {
	data: PropTypes.array
};
