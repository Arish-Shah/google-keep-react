import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --color: #e8eaed;
    --lighter-color: #dadce0;
    --body: #202124;
    --background: #2d2e30;
    --border: #646464;
    --placeholder: #84848C;
    --image: #9e9ea0;
    --shadow: 0 0 8px rgba(0, 0, 0, 0.65);
    --large-shadow: 0 0 12px rgba(0, 0, 0, 0.65);
    --radius: 0.5rem;
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

  [contenteditable=true]:empty:before {
    content: attr(placeholder);
    display: block;
    color: var(--placeholder);
    cursor: text;
  }

  *::placeholder {
    color: var(--placeholder);
    cursor: text;
  }

  body {
    font-size: 100%;
    background: var(--body);
    color: var(--color);
    overflow-x: hidden;

    &.fixed {
      overflow: hidden;
    }
  }

  .App {
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
  }
`;
