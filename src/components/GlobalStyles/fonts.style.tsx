import { createGlobalStyle } from 'styled-components'

import Consolas from '../../assets/fonts/Consolas.woff2'
import MerriweatherBlack from '../../assets/fonts/Merriweather-Black.woff2'
import MerriweatherRegular from '../../assets/fonts/Merriweather-Regular.woff2'
import MontserratBlack from '../../assets/fonts/Montserrat-Black.woff2'
import MontserratRegular from '../../assets/fonts/Montserrat-Regular.woff2'

const GlobalStyleFonts = createGlobalStyle`
@font-face {
	font-display: swap;
	font-family: Consolas;
	src: url(${Consolas}) format("woff2");
}

@font-face {
	font-display: swap;
	font-family: Merriweather-Black;
	src: url(${MerriweatherBlack}) format("woff2");
}

@font-face {
	font-display: swap;
	font-family: Merriweather-Regular;
	src: url(${MerriweatherRegular}) format("woff2");
}

@font-face {
	font-display: swap;
	font-family: Montserrat-Black;
	src: url(${MontserratBlack}) format("woff2");
}

@font-face {
	font-display: swap;
	font-family: Montserrat-Regular;
	src: url(${MontserratRegular}) format("woff2");
}
`

export default GlobalStyleFonts
