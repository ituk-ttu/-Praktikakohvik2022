import GilroyExtraBold from './assets/fonts/Gilroy-ExtraBold.otf'
import GilroyLight from './assets/fonts/Gilroy-Light.otf'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @font-face{
        src: url(${GilroyLight});
        font-family: GilroyL;
    }

    @font-face{
        src: url(${GilroyExtraBold});
        font-family: GilroyEB;
    }

    html, body {
        margin: 0;
        padding: 0;
    }

    body {
        width: 100%;
        height: auto;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        background: rgb(255,158,56);
        background: linear-gradient(0deg, rgba(255,158,56,1) 10%, rgba(255,103,118,1) 100%);
    }

    h1, h2, h3, p, li {
        margin: 0;
        color: white;
    }

    h1 {
        font: 1000 100px/90% GilroyEB;
    }

    h2 {
        font: normal 35px GilroyEB;
    }

    h3, p, li {
        font: normal 18px/1.5em GilroyL;
    }

    @media all and (max-width: 700px){
        h1 {
            font-size: 100px;
        }

        h2 {
            font-size: 30px;
        }

        h3, p, li {
            font-size: 14px;
        }
    }
`;
 
export default GlobalStyle;