import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { keyframes } from 'styled-components';

const fadeIn = keyframes`
from {
	opacity: 0;
}

to {
	opacity: 1;
}
`;

const Section = styled.section`
	background: grey;
	opacity: 1;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-around;
	align-items: center;
	padding: 2.5% 5%;
	animation: ${fadeIn} 2s;
`;

const P = styled.p`
	text-align: center;
	margin: 20%;
	font-size: 4rem;
	font-weight: bold;
	font-family: cursive;
	color: black;
`;
const SubNav = (props) => {
	const category = props.match.params.category;

	return (
		<React.Fragment>
			{props.list.slice(1, 7).map((item, index) =>
				item.name === category ? (
					<React.Fragment>
						<Section key={index}>
							{item.subLinks.map((sublink, index) => (
								<img src={sublink.img} alt={sublink.name} key={index} />
							))}
						</Section>
						<P>Newest Products Here...</P>
					</React.Fragment>
				) : null
			)}
		</React.Fragment>
	);
};

export default SubNav;

SubNav.propTypes = {
	list: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			image: PropTypes.string,
			subLink: PropTypes.arrayOf(
				PropTypes.shape({
					name: PropTypes.string,
					img: PropTypes.string
				})
			)
		})
	)
};
