import React from 'react';
import { FlexContainerNav } from './Styles';

const TV = props => {
	return (
		<div>
			<FlexContainerNav>
				<div>
					<img src={require('../img/tv/tv4k.png')} alt="tv4k" />
				</div>
				<div>
					<img src={require('../img/tv/tv.png')} alt="tv" />
				</div>
				<div>
					<img src={require('../img/tv/app.png')} alt="app" />
				</div>
				<div>
					<img src={require('../img/tv/accesories.png')} alt="accesories" />
				</div>
				<div>
					<img src={require('../img/tv/compare.png')} alt="compare" />
				</div>
			</FlexContainerNav>
		</div>
	);
};

export default TV;
