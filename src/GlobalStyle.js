import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html { 
        box-sizing: border-box;
      }   
      
      *, ::after, ::before {
        box-sizing: inherit;
      }
      
      body {
        background: ${({ theme }) => theme.color.gray};
        margin: 0 auto;
        font-family: 'Lato', sans-serif;
      }
`;
