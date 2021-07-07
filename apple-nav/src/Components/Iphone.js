import React from 'react';
import { FlexContainerNav } from './Styles';

const Iphone = props => {
	return (
		<div>
			<FlexContainerNav>
				<div>
					<img src={require('../img/iphone/iphonexs.png')} alt="iphonexs" />
				</div>
				<div>
					<img src={require('../img/iphone/iphonexr.png')} alt="iphonexr" />
				</div>
				<div>
					<img src={require('../img/iphone/iphone8.png')} alt="iphone8" />
				</div>
				<div>
					<img src={require('../img/iphone/iphone7.png')} alt="iphone7" />
				</div>
				<div>
					<img src={require('../img/iphone/ios12.png')} alt="ios12" />
				</div>
				<div>
					<img src={require('../img/iphone/airpods.png')} alt="airpods" />
				</div>
				<div>
					<img src={require('../img/iphone/accesories.png')} alt="accesories" />
				</div>
				<div>
					<img src={require('../img/iphone/compare.png')} alt="compare" />
				</div>
			</FlexContainerNav>
		</div>
	);
};

export default Iphone;
