import React from 'react';
import { FlexContainerNav } from './Styles';

const Ipad = props => {
	return (
		<div>
			<FlexContainerNav>
				<div>
					<img src={require('../img/ipad/ipadpro.png')} alt="ipadpro" />
				</div>
				<div>
					<img src={require('../img/ipad/ipad.png')} alt="ipad" />
				</div>
				<div>
					<img src={require('../img/ipad/ipadmini4.png')} alt="ipadmini4" />
				</div>
				<div>
					<img src={require('../img/ipad/ios.png')} alt="ios" />
				</div>
				<div>
					<img src={require('../img/ipad/accesories.png')} alt="accesories" />
				</div>
				<div>
					<img src={require('../img/ipad/compare.png')} alt="compare" />
				</div>
			</FlexContainerNav>
		</div>
	);
};

export default Ipad;
