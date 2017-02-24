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


import php from "./technologies/php.png";
import asp from "./technologies/asp.png";

import preloader from "spectacle/lib/utils/preloader";
preloader([php, asp]);

export default (
    <Slide bgColor="primary" align="center top">
        <Heading textColor="black" size={3}>
            Web 1.0: Technologies
        </Heading>
        <Text>
            PHP and ASP
        </Text>
        <Image src={php} width="50%" style={{left: 0, position: "absolute"}} />
        <Image src={asp} width="50%" style={{right: 0, position: "absolute"}} />
    </Slide>
);