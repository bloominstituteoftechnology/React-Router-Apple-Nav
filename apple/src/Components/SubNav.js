import React from "react";
import styled from "styled-components";

const SubNavWrapper = styled.div`
	display: flex;
	justify-content: space-between;
background-color: ${ props => props.color };
	color: white;
	font-family: 'Roboto', sans-serif;
	font-size: 1.3rem;
	padding: 10px 30px;
`;

const SubNav = props => {
	let linkName = props.match.params.name;
	return (
		<SubNavWrapper>
			{props.data.length > 0 &&
				props.data
					.find(e => e.name === props.match.params.name)
					.subLinks.map(ele => <div><img src={ele.img} alt=""/><p>{ele.name}</p></div>)}
		</SubNavWrapper>
	);
};

export default SubNav;
