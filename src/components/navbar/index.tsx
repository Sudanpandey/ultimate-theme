import { FC } from "react";

import { NavBarProps } from "./types";
import { styled } from "theme";

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 45px;
	margin-left: 66px;
	margin-right: 66px;
	/* padding-top: 45px; */
`;

const StyledUnorderedList = styled.ul`
	li :not(:last-child) {
		/* margin-top: 40px; */
		/* margin-right: 10px; */
		padding: 8px;
		
	}
	
`;
const StyledList = styled.li`
	text-decoration: none;
	display: inline;
	padding:8px;
`;

const AnchorTag = styled.a`
	border-radius: 3px;
	text-transform:uppercase;
	padding: 3px;
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
		/* padding:4px; */
		text-decoration: none;
		font-size: 12px;
		font-weight: 700;
	}
`;

const NavBar: FC<NavBarProps> = ({ logo, navItems }) => (
	<Wrapper>
		{logo}
		<StyledUnorderedList>
			{navItems.map(({ name, link }) => (
				<StyledList >
					<AnchorTag href={link}>{name}</AnchorTag>
				</StyledList>
			))}
		</StyledUnorderedList>
	</Wrapper>
);
export default NavBar;
