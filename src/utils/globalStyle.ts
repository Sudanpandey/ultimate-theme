import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, *:before, *:after {
    box-sizing: inherit;
    }
*{
    box-sizing: border-box;
    font-size: 18px;
    padding: 0;
    margin: 0;
    font-family:"Roboto";
   
}

li {
    padding: 0;
    margin: 0;
}

body, html {
    padding: 0;
    margin: 0;

  height: 100vh;
  width: 100%;
}
    #__next {
        height: 100%;
        width: 100%;
    }

    html {
    box-sizing: border-box;
    }

`;
export default GlobalStyle;
