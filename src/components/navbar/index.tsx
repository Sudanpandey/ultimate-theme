import { FC } from "react";

import { NavBarProps } from "./types";
import { styled } from "theme";

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	

	@media (min-width: 750px) {
		.smallDeviceNav {
			display: none;
		}
	}

	@media (max-width: 749px) {
		.largeDeviceNav {
			display: none;
		}
	}

	max-width: 64em;
	width: calc(100% - 3rem);

	margin: 45px auto 0 auto;
`;

const StyledUnorderedList = styled.ul`
	li :not(:last-child) {
		/* margin-top: 40px; */
		/* margin-right: 10px; */
		padding: 8px;
	}
`;
const StyledList = styled.li`
	@media (min-width: 750px) {
		display: inline;
	}
	text-decoration: none;
	padding: 10px;
`;

const AnchorTag = styled.a`
	border-radius: 3px;
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
`;

const NavBar: FC<NavBarProps> = ({ logo, navItems }) => (
	<Wrapper>
		{logo}
		<span className="smallDeviceNav">⋯</span>
		<StyledUnorderedList className="largeDeviceNav">
			{navItems.map(({ name, link }) => (
				<StyledList>
					<AnchorTag href={link}>{name}</AnchorTag>
				</StyledList>
			))}
		</StyledUnorderedList>
	</Wrapper>
);
export default NavBar;
