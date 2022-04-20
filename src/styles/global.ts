import { createGlobalStyle } from "styled-components";
import fundo from "../imagens/weg_wms_dark2.png"


export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    html {
        font-size: 62.5%;
    }
    body {
        background-image: url(${fundo});
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        color: #fff;
        -webkit-font-smoothing: antialiased;
        cursor: default;
    }

    body, input, button {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.6rem;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 500;
    }

    button {
        cursor: pointer;
    }
`;