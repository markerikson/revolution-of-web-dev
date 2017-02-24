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


import ie6 from "./browsers/ie6.jpg";

import preloader from "spectacle/lib/utils/preloader";
preloader([ie6]);


export default (
    <Slide bgColor="primary" align="center top">
        <Heading textColor="black" size={3}>
            Web 2.0: Browsers
        </Heading>
        <Text>
            IE6
        </Text>

        <Image src={ie6}/>

    </Slide>
);