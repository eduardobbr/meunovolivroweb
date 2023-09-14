import { createGlobalStyle } from "styled-components";
import workSansBlack from "../assets/workSans/WorkSans-Black.ttf";
import workSansBlackItalic from "../assets/workSans/WorkSans-BlackItalic.ttf";
import workSansBold from "../assets/workSans/WorkSans-Bold.ttf";
import workSansBoldItalic from "../assets/workSans/WorkSans-BoldItalic.ttf";
import workSansExtraBold from "../assets/workSans/WorkSans-ExtraBold.ttf";
import workSansExtraBoldItalic from "../assets/workSans/WorkSans-ExtraBoldItalic.ttf";
import workSansExtraLight from "../assets/workSans/WorkSans-ExtraLight.ttf";
import workSansExtraLightItalic from "../assets/workSans/WorkSans-ExtraLightItalic.ttf";
import workSansItalic from "../assets/workSans/WorkSans-Italic.ttf";
import workSansLight from "../assets/workSans/WorkSans-Light.ttf";
import workSansLightItalic from "../assets/workSans/WorkSans-LightItalic.ttf";
import workSansMedium from "../assets/workSans/WorkSans-Medium.ttf";
import workSansMediumItalic from "../assets/workSans/WorkSans-MediumItalic.ttf";
import workSansRegular from "../assets/workSans/WorkSans-Regular.ttf";
import workSansSemiBold from "../assets/workSans/WorkSans-SemiBold.ttf";
import workSansSemiBoldItalic from "../assets/workSans/WorkSans-SemiBoldItalic.ttf";
import workSansThin from "../assets/workSans/WorkSans-Thin.ttf";
import workSansThinItalic from "../assets/workSans/WorkSans-ThinItalic.ttf";

import bitterBlack from "../assets/Bitter/Bitter-Black.ttf";
import bitterBlackItalic from "../assets/Bitter/Bitter-BlackItalic.ttf";
import bitterBold from "../assets/Bitter/Bitter-Bold.ttf";
import bitterBoldItalic from "../assets/Bitter/Bitter-BoldItalic.ttf";
import bitterExtraBold from "../assets/Bitter/Bitter-ExtraBold.ttf";
import bitterExtraBoldItalic from "../assets/Bitter/Bitter-ExtraBoldItalic.ttf";
import bitterExtraLight from "../assets/Bitter/Bitter-ExtraLight.ttf";
import bitterExtraLightItalic from "../assets/Bitter/Bitter-ExtraLightItalic.ttf";
import bitterItalic from "../assets/Bitter/Bitter-Italic.ttf";
import bitterLight from "../assets/Bitter/Bitter-Light.ttf";
import bitterLightItalic from "../assets/Bitter/Bitter-LightItalic.ttf";
import bitterMedium from "../assets/Bitter/Bitter-Medium.ttf";
import bitterMediumItalic from "../assets/Bitter/Bitter-MediumItalic.ttf";
import bitterRegular from "../assets/Bitter/Bitter-Regular.ttf";
import bitterSemiBold from "../assets/Bitter/Bitter-SemiBold.ttf";
import bitterSemiBoldItalic from "../assets/Bitter/Bitter-SemiBoldItalic.ttf";
import bitterThin from "../assets/Bitter/Bitter-Thin.ttf";
import bitterThinItalic from "../assets/Bitter/Bitter-ThinItalic.ttf";

export const GlobalStyle = createGlobalStyle`
@font-face{
    font-family: "Work Sans";
    src: url(${workSansBlack}) format('ttf'), url(${workSansBlackItalic}) format('ttf'), url(${workSansBold}) format('ttf'), url(${workSansBoldItalic}) format('ttf'), url(${workSansExtraBold}) format('ttf'), url(${workSansExtraBoldItalic}) format('ttf'), url(${workSansExtraLight}) format('ttf'), url(${workSansExtraLightItalic}) format('ttf'), url(${workSansItalic}) format('ttf'), url(${workSansLight}) format('ttf'), url(${workSansLightItalic}) format('ttf'), url(${workSansMedium}) format('ttf'), url(${workSansMediumItalic}) format('ttf'), url(${workSansRegular}) format('ttf'), url(${workSansSemiBold}) format('ttf'), url(${workSansSemiBoldItalic}) format('ttf'), url(${workSansThin}) format('ttf'), url(${workSansThinItalic}) format('ttf');    
}

@font-face{
    font-family: "Bitter";
    src: url(${bitterBlack}) format('ttf'), url(${bitterBlackItalic}) format('ttf'), url(${bitterBold}) format('ttf'), url(${bitterBoldItalic}) format('ttf'), url(${bitterExtraBold}) format('ttf'), url(${bitterExtraBoldItalic}) format('ttf'), url(${bitterExtraLight}) format('ttf'), url(${bitterExtraLightItalic}) format('ttf'), url(${bitterItalic}) format('ttf'), url(${bitterLight}) format('ttf'), url(${bitterLightItalic}) format('ttf'), url(${bitterMedium}) format('ttf'), url(${bitterMediumItalic}) format('ttf'), url(${bitterRegular}) format('ttf'), url(${bitterSemiBold}) format('ttf'), url(${bitterSemiBoldItalic}) format('ttf'), url(${bitterThin}) format('ttf'), url(${bitterThinItalic}) format('ttf');
}

:root { 
    --mainBgColor: rgb(255, 255, 255);
    --mainBgColorOpacity: rgba(8, 9, 48, 0.44);
    --secondBgColorOpacity: rgba(112, 209, 149, 0.7);
    --primaryColor: rgb(237, 109, 9);
    --secondaryColor: rgb(175, 28, 30);
    --tertiaryColor: rgb(8, 9, 48);
    --quaternaryColor: rgb(247, 164, 8);
    --mainTextColor: rgb(122, 122, 122);
    --secondaryTextColor: rgb(255, 255, 255);
}

html, body, div, ul ,li, figure, figcaption, h1, h2, h3, h4, h5, h6, p, a, form, input, button, main, section, nav, header, footer {
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    padding: 0;
    margin: 0;
    font-family: "Work Sans", sans-serif;
}
`;
