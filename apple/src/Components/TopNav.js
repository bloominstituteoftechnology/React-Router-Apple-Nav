import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TopNavWrapper = styled.div`
	display: flex;
`;

const TopNav__link = styled(Link)`
	background-color: black;
	color: white;
`;

function TopNav(props) {
	return (
		<TopNavWrapper>
			{props.data.map( e => (
			<TopNav__link to={`/${e.name}`}>{e.name}</TopNav__link>
			))}
		</TopNavWrapper>
	);
}

export default TopNav;