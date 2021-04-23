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
  --light-green:#04c7c4;
  --accent-dark: #b5c8ff;
  --accent: #ffcf3b;

  /*Typography*/
 
    --h1-size:3.8rem;
    --title-size: 2.8rem;
    --subhead-size: 1.3rem;
    --body-size:1rem;
    --type-button:1rem;
    --type-placeholder-size:0.90rem;    
}
`;