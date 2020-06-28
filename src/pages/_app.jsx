import React from "react";
import App from "next/app";

import { ThemeProvider } from "styled-components";

import theme from "theme";
import GlobalStyle from "utils/globalStyle";

class MyApp extends App {
	componentDidMount() {
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles && jssStyles.parentNode)
			jssStyles.parentNode.removeChild(jssStyles);
	}

	render() {
		const { Component, pageProps } = this.props;
		return (
			<>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<Component {...pageProps} />
				</ThemeProvider>
			</>
		);
	}
}
export default MyApp;
