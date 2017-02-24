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


import sourceforge from "./codeSharing/sourceforge.png";
import googleCode from "./codeSharing/googleCode.jpg";

import preloader from "spectacle/lib/utils/preloader";
preloader([sourceforge, googleCode]);


export default (
    <Slide bgColor="primary" align="center top">
        <Heading textColor="black" size={3}>
            Web 2.0: Code Sharing
        </Heading>
        <Text>
            Sourceforge, Google Code
        </Text>

        <Layout style={{alignItems: "flex-start", justifyContent : "center"}}>
            <Image src={sourceforge} width="50%" />
            <Image src={googleCode} width="50%" />
        </Layout>

    </Slide>
);