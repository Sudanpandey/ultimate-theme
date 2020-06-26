import React from "react";
// import styled from "styled-components";
import { styled } from "theme";


const Heading = styled.h1`
	font-size: 40px;
	color: ${({ theme: { colors } }) => colors.navbar};
	/* color: red; */

`;

function About() {
	return <Heading>Hello I am From About page</Heading>
}      
export default About;
