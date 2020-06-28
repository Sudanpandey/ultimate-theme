import React from "react";
import About from "components/About";
// import styled from "styled-components";
import { styled } from "theme";

const Heading = styled.h1`
	font-size: 40px;
	color: ${({ theme: { colors } }) => colors.buttonSecondary};
	/* color: green;          */
`;


const HomePage = () => {

	return (
		<>
			<Heading>Hello I am From Index page</Heading>
			<About />
		</>
	);
};
export default HomePage;
