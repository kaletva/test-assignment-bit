import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'Roboto', sans-serif;
        background-color: ${(props) => props.theme.colors.baseBlack};
    }
    a{
        display: inline-block;
        text-decoration: none;
    }
    h1, h2, h3, h4, h5, h6, p {
        font-style: normal;
        line-height: normal;
        margin: 0;
    }
    
    input{
        transition: border 0.2s ease, background 0.2s ease, color 0.2s ease;
    }
    
    button {
        cursor: pointer;
        border: none;
        background-color: transparent;
    }
    input:focus,
    select:focus,
    textarea:focus,
    button:focus {
        outline: none;
        outline-width: 0;
    }
`;

export default GlobalStyle;
