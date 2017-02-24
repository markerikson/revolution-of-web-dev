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


import esTimeline from "./esTimeline.png";
import goodVsDefinitive from "./goodVsDefinitive.jpg";

import preloader from "spectacle/lib/utils/preloader";
preloader([esTimeline, goodVsDefinitive]);

export default (
    <Slide bgColor="primary" align="center top">
        <Heading textColor="black" size={4}>
            A Brief History of Javascript
        </Heading>

        <Layout style={{flexDirection : "column"}}>
            <Image src={esTimeline} width="70%" />
            <Image src={goodVsDefinitive} width="50%"/>
        </Layout>

    </Slide>
);