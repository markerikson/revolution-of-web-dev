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


import webTimeline from "./webTimeline/webTimeline.png";

import preloader from "spectacle/lib/utils/preloader";
preloader([webTimeline]);


export default (
    <Slide bgColor="primary" align="center top">
        <Heading textColor="black" size={3}>
            Timeline of Web Technologies
        </Heading>

        <Image src={webTimeline} width="100%" />


    </Slide>
);