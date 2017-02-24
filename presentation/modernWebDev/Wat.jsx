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


import toolLogos from "./intro/toolLogos.png";

import preloader from "spectacle/lib/utils/preloader";
preloader([toolLogos]);


export default (
    <Slide bgColor="primary" align="center top">
        <Heading textColor="black" size={4}>
            Modern Web Dev: WAT IS THIS
        </Heading>
        <Image src={toolLogos} width="70%"/>

    </Slide>
);