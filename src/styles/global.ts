import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

 
  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: ${props => props.theme.colors.gray50};
    color: ${props => props.theme.colors.gray600};
    font: 400 1rem ${props => props.theme.fonts.default}, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
