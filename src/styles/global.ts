import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`

    :root{
        --red: #e52e4d;
        --blue: #5429cc;
        --green: #33cc95;
        --blue-light: #6933ff;
        --text-title: #363f5f;
        --text-body: #969cb3;
        --primary: '#d9d5d4';
        --shape: #ffffffff;
    }
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
      }
    body{
        background-color: '#d9d5d4';
    }
    border-style, input, textarea, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h4, h6, strong{
        font-weight: 600;
    }
    html{
        @media(max-width: 1080px){
            font-size: 93.75%; //15px 
        }
        @media(max-width: 720px){
            font-size: 87.5%; //14px
        }
    }
    button{
        border: none;
        cursor: pointer;
    }
    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
`;