import {Global, css} from "@emotion/react";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        html {
          min-width: 250px;
        }

        html,
        body {
          height: 100%;
          > div {
            height: 100%;
          }
        }

        html,
        body {
          font-size: 18px;
          font-family: Muli;
          padding: 0;
          margin: 0;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: Muli-Semi;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        * {
          box-sizing: border-box;
        }

        /* latin */
        @font-face {
          font-family: "Glacial-Body";
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url("./fonts/GlacialIndifference-Regular.otf") format("opentype");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }

        @font-face {
          font-family: "Muli";
          font-style: normal;
          font-display: swap;
          src: url("./fonts/MULI.TTF") format("truetype");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }

        @font-face {
          font-family: "Muli-Semi";
          font-style: normal;
          font-display: swap;
          src: url("./fonts/MULI-SEMIBOLD.TTF") format("truetype");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }

        @font-face {
          font-family: "Muli-Bold";
          font-style: bold;
          font-weight: 800;
          font-display: swap;
          src: url("./fonts/MULI-BOLD.TTF") format("truetype");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }

        @font-face {
          font-family: "Bebas";
          font-style: normal;
          font-display: swap;
          src: url("./fonts/BEBAS-REGULAR.TTF") format("truetype");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }
      `}
    />
  );
};

export default GlobalStyles;
