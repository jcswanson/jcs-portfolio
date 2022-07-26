import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  // Fonts
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,500;0,600;0,700;1,100;1,200;1,300;1,500;1,600;1,700&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,300;1,700&display=swap');
  
  /* 
  font-family: 'Montserrat', sans-serif;
  font-family: 'Roboto', sans-serif;
  font-family: 'Roboto Mono', monospace;
  */

  :root {
    // Coolor Accents 
    --raisin-black: hsla(334, 12%, 12%, 1);
    --raisin-black-transparent: rgba(34, 27, 30, 0.877);
    --trypan-blue: hsla(245, 100%, 36%, 1);
    --han-purple: hsla(260, 86%, 53%, 1);
    --medium-slate-blue: #8075ff;

    // jcswanson.com colors 
    --grey-grn: #6c726d;
    --gray-red: #6d6464;
    --drk-space: #211528;
    --drk-jungle: #1E2D2F;
    --orange: #8ae481;
    --sky-blue: #ec217c;
    --dark-bronze: #54494B;
    --gray-orange: #b1adb1;
    --drk-blue: #355070;
    --cotton-cloud: #87F1FF;
    --drk-slate-blue: #414288;
    --blue-white: rgb(255, 236, 243);

    //  Accessory Colors 
    --prussian-blue: #003049ff;
    --purple: #832161;
    --maximum-red: #d62828ff;
    --orange: #f77f00ff;
    --maximum-yellow-red: #fcbf49ff;
    --lemon-meringue: rgb(245, 241, 223);
    --error-message: #ff2525d1;
    --toast-error: #e44f4ffa;
    --toast-shadow: #9c9c9ce3;
    --toast-success: #0cbfae;
    --loader-color: #0cbfae;
}

 

  html{
    font-size: 0.85rem;
    font-family: 'Roboto Mono', monospace;
    background-color: var(--blue-white);
    }
    .container {
      max-width: 1200px;
      width: 90%;
      margin: 0 auto;
  }
  
  * {
      outline: none;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
  }
  body {
      margin: 0;
      overflow-y: overlay;
      font-family: 'Roboto Mono', monospace;
      font-weight: 500;
      font-size: 0.8rem;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      
  }
  code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }
  ::-webkit-scrollbar {
      width: 6px !important;
      height: 6px !important;
  }
  
  body ::-webkit-scrollbar-thumb {
      background-color: hsla(0, 0%, 100%, 0.16);
  }
  
  ::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.2);
  }
  
  ::-webkit-scrollbar-track {
      background: hsla(0, 0%, 100%, 0.1);
  }
  
  .btn {
      border-radius: 25px;
      padding: 15px 0;
      width: 150px;
      cursor: pointer;
      transition: 0.2s;
  }
  
  .btn:active {
      transform: translateY(2px);
  }
  
  .primary-btn {
      color: var(--blue-white);
      border-radius: 25px;
      padding: 15px 0;
      background-color: var(--drk-space);
      border: 2px solid var(--sky-blue);
      font-weight: 800;
      font-size: 0.8rem;
  }
  
  .primary-btn:hover {
      color: var(--drk-space);
      background-color: var(--sky-blue);
      border: 2px solid var(--sky-blue);
  }
  
  .highlighted-btn {
      color: var(--drk-space);
      font-family: 'Roboto Mono', monospace;
      font-weight: 800;
      font-size: 0.8rem;
      border: 2px solid var(--blue-white);
      border-radius: 25px;
      background-color: var(--blue-white);
  }
  
  @media only screen and (max-width: 568px) {
      .highlighted-btn {
          z-index: -900;
      }
  }
  
  .red-border {
      border: 2px solid var(--crimson) !important;
  }
  
  .fade-in {
      opacity: 0;
      transform: translateY(80px);
      transition: all 0.8s ease;
  }
`;
export default GlobalStyles;