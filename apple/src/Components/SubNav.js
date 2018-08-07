import React from "react";
import styled from "styled-components";

const SubNavWrapper = styled.div`
	display: flex;
`;

const SubNav__link = styled.div`
	background-color: black;
	color: white;
`;

const SubNav = props => {
	console.log(props.match.params.name);
	return (
		<SubNavWrapper>
			{props.data.length > 0 &&
				props.data
					.find(e => e.name === props.match.params.name)
					.subLinks.map(ele => <div>{ele.name}</div>)}
		</SubNavWrapper>
	);
};

export default SubNav;
