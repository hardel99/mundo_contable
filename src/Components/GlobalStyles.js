import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle `
 * 
  {
      box-sizing:border-box;
      margin:0;
      padding:0;
      font-family: 'Nunito Sans', sans-serif;
  }

  html,body
{
  /*Colors*/
  --blue: #225aff;
  --blue-dark: #091447;
  --gray-light: #f6f6fb;
  --black: #2e2e36;
  --green: #01bc9a;
  --darkgreen:#008f75;
  --accent-dark: #b5c8ff;
  --accent: #ffcf3b;

  /*Typography*/
 
    --h1-size:60px;
    --title-size: 40px;
    --subhead-size: 20px;
    --body-size:18px;
    --type-button-size:1rem;
    --type-placeholder-size:14px;    
}
`;