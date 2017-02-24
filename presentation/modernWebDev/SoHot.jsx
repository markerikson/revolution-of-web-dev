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


import soHot from "./frameworks/soHot.jpg";

import preloader from "spectacle/lib/utils/preloader";
preloader([soHot]);


export default (
    <Slide bgColor="primary" align="center top">
        <Heading textColor="black" size={3}>
            JAVASCRIPT FRAMEWORKS?!?
        </Heading>
        <Image src={soHot} width="70%"/>

    </Slide>
);