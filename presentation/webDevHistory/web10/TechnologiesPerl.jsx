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


import perl from "./technologies/perl.png";

import preloader from "spectacle/lib/utils/preloader";
preloader([perl]);

export default (
    <Slide bgColor="primary" align="center top">
        <Heading textColor="black" size={3}>
            Web 1.0: Technologies
        </Heading>
        <Text>
            CGI-BIN and Perl
        </Text>
        <Image src={perl} />
    </Slide>
);