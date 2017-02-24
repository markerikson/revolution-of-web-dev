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


import canIUse from "./browsers/canIUse.png";

import preloader from "spectacle/lib/utils/preloader";
preloader([canIUse]);


export default (
    <Slide bgColor="primary" align="center top">
        <Heading textColor="black" size={3}>
            Modern Era: Browsers
        </Heading>
        <Text>
            Browsers: "Evergreen versioning"

        </Text>

        <Image src={canIUse} width="75%"/>

    </Slide>
);