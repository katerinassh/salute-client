import { createGlobalStyle } from "styled-components";
import MontserratRegular from "./fonts/Montserrat-Regular.ttf";

const FontStyles = createGlobalStyle `
@font-face {
    font-family: 'Montserrat Regular';
    src: url(${MontserratRegular}) format('truetype');
    font-style: normal;
    font-weight: normal;
  }
  `;

export default FontStyles;