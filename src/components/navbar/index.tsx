import { FC } from "react";

import { NavBarProps } from "./types";
import { styled } from "theme";

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	position: relative;

	.smallDeviceNav {
		font-size: 20px;
		font-weight: 700;
		text-align: center;
		text-decoration-style: solid;
		height: 36px;
		width: 36px;
		border-radius: 100em;
		box-sizing: border-box;
		letter-spacing: normal;
		line-height: 36px;

		&:hover {
			background-color: ${({
				theme: {
					colors: { bgcolor },
				},
			}) => bgcolor};
		}
	}

	max-width: 64em;
	width: calc(100% - 3rem);
	margin: 45px auto 0 auto;
`;

const StyledUnorderedList = styled.ul`
	@media (max-width: 749px) {
		position: absolute;
		right: 0;
		top: 40px;
		height: 100%;
		line-height: 2.2;
		white-space: normal;
		cursor: pointer;
		text-align: left;
		white-space: normal;
		font-weight: 50;
		width: 12em;
		font-size: 0.64em;
		letter-spacing: 0em;
		text-transform: none;
		display: flex;
		flex-direction: column;
		list-style-type: none;

		.largeDeviceNav {
			display: none;
		}
		.boxStyle {
			margin-top: 8px;
			border-radius: 3px;
			background-color: ${({
				theme: {
					colors: { whiteColor },
				},
			}) => whiteColor};
			box-shadow: -10px 10px 45px #a9a9a9;
			z-index: 999;
		}

		&:hover {
			.largeDeviceNav {
				display: block;
			}
		}
	}

	@media (min-width: 750px) {
		.smallDeviceNav {
			display: none;
		}
	}

	li :not(:last-child) {
		padding: 8px;
	}
`;

const Span = styled.span`
	font-size: 24px;
`;

const StyledList = styled.li`
	@media (min-width: 750px) {
		display: inline;
	}
	@media (max-width: 750px) {
		padding: 0px;
		&:hover {
			background-color: ${({
				theme: {
					colors: { bgcolor },
				},
			}) => bgcolor};
		}
	}
	text-decoration: none;
`;

const AnchorTag = styled.a`
	border-radius: 3px;
	padding: 8px 10px;
	text-transform: uppercase;
	font-family: lft-etica, -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
	color: ${({
		theme: {
			colors: { blackColor },
		},
	}) => blackColor};
	&:hover {
		background-color: ${({
			theme: {
				colors: { bgcolor },
			},
		}) => bgcolor};
	}
	&:link {
		text-decoration: none;
		font-size: 10px;
		font-weight: 700;
	}
	@media (max-width: 750px) {
		text-transform: capitalize;
		font-size: 10px;
		&:link {
			font-size: 12.8px;
			font-weight: 400;
		}
		&:hover {
			background-color: ${({
				theme: {
					colors: { bgcolor },
				},
			}) => bgcolor};
		}
	}
`;

const MenuATag = styled.a`
	position: absolute;
	top: -48px;
	right: 0;
`;

const NavBar: FC<NavBarProps> = ({ logo, navItems }) => (
	<Wrapper>
		{logo}
		<StyledUnorderedList>
			<MenuATag className="smallDeviceNav">
				<Span>⋯</Span>
			</MenuATag>
			<div className="boxStyle">
				{navItems.map(({ name, link }) => (
					<StyledList className="largeDeviceNav">
						<AnchorTag href={link}>{name}</AnchorTag>
					</StyledList>
				))}
			</div>
		</StyledUnorderedList>
	</Wrapper>
);     
export default NavBar;
