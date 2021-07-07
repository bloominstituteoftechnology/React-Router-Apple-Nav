import React from 'react';
import { FlexContainerNav } from './Styles';

const Watch = props => {
	return (
		<div>
			<FlexContainerNav>
				<div>
					<img src={require('../img/watch/watch4.png')} alt="watch4" />
				</div>
				<div>
					<img src={require('../img/watch/watchnike+.png')} alt="watchnike+" />
				</div>
				<div>
					<img src={require('../img/watch/watchhermes.png')} alt="watchhermes" />
				</div>
				<div>
					<img src={require('../img/watch/watch3.png')} alt="watch3" />
				</div>
				<div>
					<img src={require('../img/watch/watchos.png')} alt="watchos" />
				</div>
				<div>
					<img src={require('../img/watch/bands.png')} alt="bands" />
				</div>
				<div>
					<img src={require('../img/watch/accesories.png')} alt="accesories" />
				</div>
				<div>
					<img src={require('../img/watch/compare.png')} alt="compare" />
				</div>
			</FlexContainerNav>
		</div>
	);
};

export default Watch;
