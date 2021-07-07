import React from 'react';
import { FlexContainerNav } from './Styles';

const Music = props => {
	return (
		<div>
			<FlexContainerNav>
				<div>
					<img src={require('../img/music/music.png')} alt="music" />
				</div>
				<div>
					<img src={require('../img/music/itunes.png')} alt="itunes" />
				</div>
				<div>
					<img src={require('../img/music/homepod.png')} alt="homepod" />
				</div>
				<div>
					<img src={require('../img/music/airpods.png')} alt="airpods" />
				</div>
				<div>
					<img src={require('../img/music/ipodtouch.png')} alt="ipodtouch" />
				</div>
				<div>
					<img src={require('../img/music/accesories.png')} alt="accesories" />
				</div>
				<div>
					<img src={require('../img/music/gift.png')} alt="gift" />
				</div>
			</FlexContainerNav>
		</div>
	);
};

export default Music;
