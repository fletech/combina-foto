import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}

html{
    @media (max-width: 2500px){
        font-size: 140%;
    }
    @media (max-width: 1700px){
        font-size: 100%;
    }
    @media (max-width: 1400px){
        font-size: 75%;
    }
   
}
body{
    background: #1b1b1b;
    font-family: "Calibre", sans-serif;
    overflow-x: hidden;
}
button{
    font-weight: bold;
    font-size: 1.1.rem;
    font-family: 'Calibre', sans-serif;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    &:hover{
        background-color: #23d997;
        color: white;
    }
}
    h2{
        font-weight: lighter;
        font-size: 4rem;
    }
    h3{
        color: white;
    }
    h4{
        font-weight: bold;
       font-size: 2rem
    }
    a{
        font-size: 1.1rem;
    }
    span{
        font-weight: 500;
        animation: color-change 1s infinite
    }
    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }

    @keyframes color-change {
        0% { color:#42f3b2; }
        100% { color: #18fd70; }
    }
`;

export default GlobalStyle;
