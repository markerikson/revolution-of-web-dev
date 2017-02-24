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


import ie8 from "./browsers/ie8.jpg";
import chrome from "./browsers/chrome.png";
import acid from "./browsers/acid.png";

import preloader from "spectacle/lib/utils/preloader";
preloader([ie8, chrome, acid]);


export default (
    <Slide bgColor="primary" align="center top">
        <Heading textColor="black" size={3}>
            Web 2.0: Browsers
        </Heading>
        <Text>
            IE6 -> IE8, Chrome; ACID test
        </Text>

        <Layout style={{alignItems: "flex-start", justifyContent : "center"}}>
            <Image src={ie8} width="50%" />
            <Image src={chrome} width="50%" />
        </Layout>

        <Appear>
            <div style={{position : "relative"}}>
                <Image src={acid} width="60%" style={{position : "absolute", marginTop : -400, left : "0", right : "0"}} />
            </div>
        </Appear>

    </Slide>
);