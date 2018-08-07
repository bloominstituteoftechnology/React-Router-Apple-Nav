import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const TopNavWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: black;
	padding: 10px 30px;
	opacity: 0.83;
	height: 30px;
`;

const TopNav__link = styled(NavLink)`
	color: white;
	text-decoration: none;
	font-family: 'Roboto', sans-serif;
	font-size: 1.1rem;
	padding: 0 3%;
	&.active{
		opacity: 0.7;
	}
`;

function TopNav(props) {
	let logo = "https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/apple/image_small.svg"
	let spyglass = "https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg"
	let cart = "https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/bag/image_large.svg"
	return (
		<TopNavWrapper>
			<TopNav__link to='/'><img src={logo} alt=""/></TopNav__link>
			{props.data.map( e => (
				<TopNav__link to={`/${e.name}`}>{e.name}</TopNav__link>
			))}
			<TopNav__link to='/'><img src={spyglass} alt=""/></TopNav__link>
			<TopNav__link to='/'><img src={cart} alt=""/></TopNav__link>
		</TopNavWrapper>
	);
}

export default TopNav;