import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Section = styled.section`
	background: pink;
	opacity: 0.8;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-around;
	align-items: center;
`;
const SubNav = (props) => {

	return (
			<Section>
           {props.sublinks.map((sublink, index)=> <img src={sublink.img} alt={sublink.name} key={index}/>)}
			</Section>
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
