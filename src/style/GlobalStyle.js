import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#121212' : '#ffffff')};
    color: ${({ isDarkMode }) => (isDarkMode ? '#ffffff' : '#000000')};
    transition: background-color 0.3s, color 0.3s;
    height: 100vh;
    width: 100vw;
    overflow-x: hidden; /* Disable horizontal scroll */
    overflow-y: auto; /* Enable vertical scroll if needed */
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  h1, h2 {
    margin: 0.5em 0;
  }

  h1 {
    font-size: 2em;
    text-align: center;
  }

  h2 {
    font-size: 1.5em;
  }

  input, button {
    font-size: 1em;
  }

  button {
    cursor: pointer; /* Reset cursor to default */
  }

  table {
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#1e1e1e' : '#ffffff')};
  }

  th {
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#333333' : '#f2f2f2')};
  }

  td, th {
    border: 1px solid ${({ isDarkMode }) => (isDarkMode ? '#444444' : '#dddddd')};
  }
`;

export default GlobalStyle;
