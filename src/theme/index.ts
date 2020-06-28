
	import baseStyled, { ThemedBaseStyledInterface } from "styled-components";

    const colors = {
        font: "#2B8285",
        buttonPrimary: "#24b47e",
        buttonSecondary: "#442ebf",
        navbar:"#7CFC00",   
         
    };
    
    export const theme = {      
        colors,  
    };
   
    export type Theme = typeof theme;
    
    export const styled = baseStyled as ThemedBaseStyledInterface<Theme>;
    export  default theme;
    