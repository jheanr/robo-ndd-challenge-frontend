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
    background-color: ${props => props.theme.colors.gray50};
    background-image: url("background.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    color: ${props => props.theme.colors.gray600};
    font: 400 1rem ${props => props.theme.fonts.default}, sans-serif;

    @media (max-width: 425px) {
      background-image: url("background-mobile.png");
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
