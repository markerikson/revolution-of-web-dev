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


import mozilla from "./browsers/mozilla.jpg";
import firefox from "./browsers/firefox.jpg";

import preloader from "spectacle/lib/utils/preloader";
preloader([mozilla, firefox]);


export default (
    <Slide bgColor="primary" align="center top">
        <Heading textColor="black" size={3}>
            Web 2.0: Browsers
        </Heading>
        <Text>
            Mozilla -> Firefox
        </Text>

        <Layout style={{alignItems: "flex-start", justifyContent : "center"}}>
            <Image src={mozilla} width="50%" />
            <Image src={firefox} width="50%" />
        </Layout>

    </Slide>
);