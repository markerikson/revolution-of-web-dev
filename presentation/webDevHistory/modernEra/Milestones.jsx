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


import node from "./milestones/node.png";
import thoughtsOnFlash from "./milestones/thoughtsOnFlash.jpg";

import preloader from "spectacle/lib/utils/preloader";
preloader([node, thoughtsOnFlash]);


export default (
    <Slide bgColor="primary" align="center top">
        <Heading textColor="black" size={3}>
            Modern Era: Milestones
        </Heading>

        <Layout style={{flexDirection : "column"}}>
            <Text>Node</Text>
            <Image src={node} width="30%" />
            <Text>Death of Plugins</Text>
            <Image src={thoughtsOnFlash} width="60%" />
        </Layout>


    </Slide>
);