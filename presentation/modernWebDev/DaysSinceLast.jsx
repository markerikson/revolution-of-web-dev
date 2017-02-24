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


import twoDays from "./frameworks/homer2Days.png";
import zeroDays from "./frameworks/zeroDays.png";

import preloader from "spectacle/lib/utils/preloader";
preloader([twoDays, zeroDays]);


export default (
    <Slide bgColor="primary" align="center top">
        <Heading textColor="black" size={3}>
            JAVASCRIPT FRAMEWORKS?!?
        </Heading>
        <Image src={twoDays} width="100%"/>
        <Appear>
            <span>
                <Image src={zeroDays} style={{position : "absolute", marginBottom : "auto", marginTop : 100, left : 0, right : 0}} />
            </span>
        </Appear>


    </Slide>
);