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


import mosaic from "./browsers/mosaic.jpg";
import netscape from "./browsers/netscape.jpg";
import ie from "./browsers/ie4.jpg";

import preloader from "spectacle/lib/utils/preloader";
preloader([mosaic, netscape, ie]);

export default (
    <Slide bgColor="primary" align="center top">
        <Heading textColor="black" size={3}>
            Web 1.0: Browsers
        </Heading>
        <Text>
            Mosaic, Netscape, and Internet Explorer
        </Text>

        <Image src={mosaic} width="50%" style={{left: 0, position: "absolute"}}/>
        <Image src={netscape} width="65%" style={{position: "relative", zIndex: 10, marginTop : 25}}/>
        <Image src={ie} width="50%" style={{position: "absolute", right: 0, zIndex: 20, marginTop : 50}} />

    </Slide>
);