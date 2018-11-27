import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Section = styled.section`
	background: grey;
	opacity: 1;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-around;
    align-items: center;
    padding: 2.5% 5%;
`;
const SubNav = (props) => {
   const category = props.match.params.category

	return (
    <React.Fragment>
        {props.list.slice(1,7).map((item, index) => ( 
            item.name === category ?
                    <Section key={index}>
                    {item.subLinks.map((sublink, index) =>
                     <img src={sublink.img} alt={sublink.name} key={index} />)
                    }
			        </Section>
            : null
        ))}
        
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
