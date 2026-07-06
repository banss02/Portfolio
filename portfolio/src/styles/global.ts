import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg-primary: #020617;
    --bg-secondary: #0F172A;
    --bg-card: rgba(15, 23, 42, 0.8);
    --blue: #3B82F6;
    --green: #00FF88;
    --purple: #8B5CF6;
    --text-primary: #F1F5F9;
    --text-secondary: #94A3B8;
    --border: rgba(59, 130, 246, 0.15);
    --glow-blue: rgba(59, 130, 246, 0.4);
    --glow-green: rgba(0, 255, 136, 0.4);
    --glow-purple: rgba(139, 92, 246, 0.4);
    scroll-padding-top: 8rem;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Inter', 'Red Hat Display', sans-serif;
    background-color: var(--bg-primary);
    color: var(--text-primary);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  body, input, textarea, button {
    font-family: 'Inter', 'Red Hat Display', sans-serif;
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button, .button {
    border: none;
    cursor: pointer;
    border-radius: 0.8rem;
    font-weight: 600;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  button:disabled, .button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .logo {
    font-size: 2.2rem;
    font-weight: 700;
    background: linear-gradient(135deg, var(--blue), var(--purple));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: var(--bg-primary);
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(var(--blue), var(--purple));
    border-radius: 3px;
  }
`;
