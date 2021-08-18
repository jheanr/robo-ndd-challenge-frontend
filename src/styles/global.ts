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
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 1rem ${props => props.theme.fonts.default}, sans-serif;
    padding: 2rem 8rem;

    @media (max-width: 1024px) {
      padding: 2rem 4rem;
    }

    @media (max-width: 425px) {
      padding: 2rem;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
