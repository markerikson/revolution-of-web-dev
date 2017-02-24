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


import soap from "./dataTransfer/soap.gif";

import preloader from "spectacle/lib/utils/preloader";
preloader([soap]);


export default (
    <Slide bgColor="primary" align="center top">
        <Heading textColor="black" size={3}>
            Web 2.0: Data Transfer
        </Heading>
        <Text>
            XML, SOAP / WS-*
        </Text>

        <Image src={soap} width="75%"/>

    </Slide>
);