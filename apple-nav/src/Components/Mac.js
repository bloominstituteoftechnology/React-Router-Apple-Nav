import React from 'react';
import { FlexContainerNav } from './Styles';

const Mac = props => {
	return (
		<div>
			<FlexContainerNav>
				<div>
					<img src={require('../img/mac/macbook.png')} alt="macbook" />
				</div>
				<div>
					<img src={require('../img/mac/macbookair.png')} alt="macbookair" />
				</div>
				<div>
					<img src={require('../img/mac/macbookpro.png')} alt="macbookpro" />
				</div>
				<div>
					<img src={require('../img/mac/imac.png')} alt="imac" />
				</div>
				<div>
					<img src={require('../img/mac/imacpro.png')} alt="imacpro" />
				</div>
				<div>
					<img src={require('../img/mac/macpro.png')} alt="macpro" />
				</div>
				<div>
					<img src={require('../img/mac/macmini.png')} alt="macmini" />
				</div>
				<div>
					<img src={require('../img/mac/accesories.png')} alt="accesories" />
				</div>
				<div>
					<img src={require('../img/mac/mojave.png')} alt="mojave" />
				</div>
				<div>
					<img src={require('../img/mac/compare.png')} alt="compare" />
				</div>
			</FlexContainerNav>
		</div>
	);
};

export default Mac;
