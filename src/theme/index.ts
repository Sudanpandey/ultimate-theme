import baseStyled, { ThemedBaseStyledInterface } from "styled-components";

const colors = {
	font: "#2B8285",
	buttonPrimary: "#24b47e",
	buttonSecondary: "#442ebf",
	navbar: "#7CFC00",

	blackColor: "#262626",
	greenColor: "#82b440",
    whiteColor: "#FFFFFF",
    lightBlack:"#9E9E9E",
    backgroundColor:"#F5F5F5",
    buttonColor:"#FBA62F",
    greenlightColor:"#479F5F",
    redColor:"#F24B5C",
    yellowColor:"#F29C2D",
    blueColor:"#3598DB",
    textMarqueeColor:"#9A58B6",
    bluecolor:"#4A50BF",
    buttonBackground:"#494FBD",
    imageBackground:"#110D2C",
    imageBackgroundHover1:"#DE514A",
    imageBackgroundHover2:"#F99B30",
    imageBackgroundHover3:"#FECF39",
    imageBackgroundHover4:"#F34727",
    imageBackgroundHover5:"#3BA0FA",
    imageBackgroundHover6:"#836AF2",
    imageBackgroundHover7:"#93BA50",
    imageBackgroundHover8:"#52C7A9",
    imageBackgroundHover9:"#4D67A1",
    imageBackgroundHover10:"#9CD0EE",
    imageBackgroundHover11:"#729F9F",
    imageBackgroundHover12:"#AA6988",
    imageBackgroundHover13:"#CDCDCD",
    imageBackgroundHover14:"#62779D",
    imageBackgroundHover15:"#88A43F",
    imageBackgroundHover16:"#D6532C",
    imageBackgroundHover17:"#6C9D6D",
    imageBackgroundHover18:"#71D7EF",
    imageBackgroundHover19:"#4FB589",

    textColor1:"#9E9E9E",
    buyButton:"#4A4FBF"

    
    
    




};

export const theme = {
	colors,
};

export type Theme = typeof theme;

export const styled = baseStyled as ThemedBaseStyledInterface<Theme>;
export default theme;
