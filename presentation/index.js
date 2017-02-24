// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

import intro from "./intro";
import webDevHistory from "./webDevHistory";
import modernWebDev from "./modernWebDev";
import buildingApp from "./buildingApp";
import closing from "./closing";


const colors = {
  primary: "white",
  secondary : "black",
  tertiary : "red",
  quartenary : "black",
};

const fonts = {
  primary: "Open Sans Condensed",
  secondary: "Open Sans Condensed",
  tertiary: "monospace"
}

const theme = createTheme(colors, fonts);



const slides = intro.concat(
    webDevHistory,
    modernWebDev,
    buildingApp,
    closing,
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck progress="number">
          {React.Children.toArray(slides)}
        </Deck>
      </Spectacle>
    );
  }
}
