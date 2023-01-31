import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
// @charset "UTF-8";

/*
This global style resetting solves the following problems:
👉 Custom Properties unifications
👉 Box-model general issues
👉 Problems with images, videos and svg icons
👉 Problems with fonts and input tags in forms
👉 Typography of all the labels on a website unifications
*/

/* We use more-intuitive box-sizing models */
*,
*:before,
*:after {
  box-sizing: border-box;
}

/* Here we define the Custom properties */
:root {
  --black-color: #393939;
  /* Typography */
  // --tipo-principal: Helvetica, Arial, sans-serif;
  --tipo-principal: 'Roboto', 'Ubuntu', sans-serif;
  // --tipo-secundaria: Verdana;
}

/* We create a root stacking context */
#root, #__next {
  isolation: isolate;
}

/* We adapt them to dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --black-color: #ececec;
  }
}

/* Optional */
/* We configure if a user has activated the high contrast mode. (WD) */
/* Optional */
/* We deactivate the animations in the case that */
/* the user has set the mode without animation */
@media (prefers-reduced-motion: reduce) {
  * {
    -webkit-animation: none !important;
            animation: none !important;
    -webkit-transition: none !important;
    transition: none !important;
  }
}

/* We reset the margin and paddings of all the labels */
* {
  margin: 0;
  padding: 0;
  border: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  vertical-align: baseline;
}

/* We allow percentage-based heights in the application */
html, body {
  height: 100%;
}

/* We avoid problems with images */
img, picture, video, iframe, figure, canvas {
  max-width: 100%;
  width: 100%;
  display: block;
  /* optional */
  -o-object-fit: cover;
     object-fit: cover;
  /* optional */
  -o-object-position: center center;
     object-position: center center;
}

/* We reset the links to function as boxes... */
a {
  display: block;
  text-decoration: none;
  color: inherit;
  font-size: inherit;
}

/* ... except those found in paragraphs */
p a {
  display: inline;
}

/* We remove the points from the <li>*/
li {
  list-style-type: none;
}

/* We set soft anchors */
html {
  scroll-behavior: smooth;
}

/* We deactivate default styles of the main text labels */
h1, h2, h3, h4, h5, h6, p, span, a, strong, blockquote, i, b, u, em {
  font-size: 1em;
  font-weight: inherit;
  font-style: inherit;
  text-decoration: none;
  color: inherit;
}

/* We avoid text overflow */
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

/* We avoid problems with quotes pseudo-elements */
blockquote:before, blockquote:after, q:before, q:after {
  content: "";
  content: none;
}

/* We configure the text that we select */
::-moz-selection {
  background-color: var(--black-color);
  color: var(--white-color);
}
::selection {
  background-color: var(--black-color);
  color: var(--white-color);
}

/* We level typography and form placement problems */
form, input, textarea, select, button, label {
  font-family: inherit;
  font-size: inherit;
  -webkit-hyphens: auto;
      -ms-hyphens: auto;
          hyphens: auto;
  background-color: transparent;
  color: inherit;
  display: block;
  /* optional */
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}

/* We reset the tables */
table, tr, td {
  border-collapse: collapse;
  border-spacing: 0;
}

/* We avoid problems with SVGs*/
svg {
  width: 100%;
  display: block;
  fill: currentColor;
}

/* (Testing it, not using it in production) In the case of adding a  */
/* p svg{
  display: inline;
  width: initial;
} */
/* We configure the typography for the entire web */
body {
  min-height: 100vh;
  font-size: 100%;
  font-family: var(--tipo-principal);
  color: var(--black-color);
  /* optional */
  line-height: 1.4em;
  /* optional */
  -webkit-hyphens: auto;
      -ms-hyphens: auto;
          hyphens: auto;
  /* optional */
  font-smooth: always;
  /* opcional */
  -webkit-font-smoothing: antialiased;
  /* optional */
  -moz-osx-font-smoothing: grayscale;
}

`;

export default GlobalStyle;

// References:
// https://github.com/eduardofierropro/Reset-CSS/blob/main/css/app.css
// Arthus Procópio
// Roberto Cestari
