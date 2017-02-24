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


import adminPage from "./typicalSite/adminPage.png";

import preloader from "spectacle/lib/utils/preloader";
preloader([adminPage]);


export default (
    <Slide bgColor="primary" align="center top">
        <Heading textColor="black" size={3}>
            Modern Era (2010-present)
        </Heading>
        <Text>
            Typical site: client-side JS, JSON API, microservices built with
            Node running on AWS talking to a NoSQL DB
        </Text>

        <Image src={adminPage} width="75%"/>

    </Slide>
);