import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const TopNavWrapperWrapper = styled.div`
	display: flex;
	align-items: center;
	background: black;
	opacity: 0.83;
	padding: 0 30px;
	height: 40px;
`;

const TopNavWrapper = styled.div`
	margin: 0 auto;
	height: 100%;
	max-width: 1024px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const TopNav__link = styled(NavLink)`
	color: white;
	text-decoration: none;
	font-family: "Roboto", sans-serif;
	font-size: 1.1rem;
	&:not(:last-child) {
		margin-right: 2rem;
	}
	&.active {
		opacity: 0.7;
	}
`;

function TopNav(props) {
	let logo =
		"https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/apple/image_small.svg";
	let spyglass =
		"https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg";
	let cart =
		"https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/bag/image_large.svg";
	return (
		<TopNavWrapperWrapper>
			<TopNavWrapper>
				<TopNav__link to="/">
					<img src={logo} alt="" />
				</TopNav__link>
				{props.data.map(e => (
					<TopNav__link to={`/${e.name}`}>{e.name}</TopNav__link>
				))}
				<TopNav__link to="/">
					<img src={spyglass} alt="" />
				</TopNav__link>
				<TopNav__link to="/">
					<img src={cart} alt="" />
				</TopNav__link>
			</TopNavWrapper>
		</TopNavWrapperWrapper>
	);
}

export default TopNav;
