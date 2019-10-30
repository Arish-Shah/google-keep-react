import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --color: #e8eaed;
    --lighter-color: #dadce0;
    --background: #202124;
    --lighter-background: #2d2e30;
    --lightest-background: #555;
    --shadow: 0 0 8px rgba(0, 0, 0, 0.65);
    --radius: 0.65rem;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    outline: 0;
  }

  body {
    font-size: 100%;
    background: var(--background);
    color: var(--color);
  }

  .App {
    width: 100%;
    max-width: 860px;
    margin: 0 auto;
    padding: 1rem;
  }
`;
