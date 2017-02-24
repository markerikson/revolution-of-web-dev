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


import flickr from "./typicalSite/flickr.png";
import web20 from "./typicalSite/web20.png";
import logoCreator from "./typicalSite/logoCreator.png"

import preloader from "spectacle/lib/utils/preloader";
preloader([flickr, web20, logoCreator]);

export default (
    <Slide bgColor="primary" align="center top">
        <Heading textColor="black" size={3}>
            Web 2.0 (2001-2010)
        </Heading>
        <Text>
            Typical site: server-rendered pages, MySQL database, running
            on J2EE, Rails, or PHP

        </Text>


        <Image src={flickr} width="50%" style={{position : "relative"}}/>

        <Appear>
            <span>
                <Image src={web20} width="35%" style={{left: 100, position: "absolute", zIndex: 10,}}/>
            </span>
        </Appear>
        <Appear>
            <span>
                <Image src={logoCreator} width="50%" style={{position: "absolute", right: 50, zIndex: 20, marginTop : 100}} />
            </span>
        </Appear>


    </Slide>
);