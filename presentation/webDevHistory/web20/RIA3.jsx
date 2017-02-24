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


import extLogo from "./ria/extLogo.jpg";
import extDemo from "./ria/extDemo.png";
import yui from "./ria/yui.jpg";

import preloader from "spectacle/lib/utils/preloader";
preloader([extLogo, extDemo, yui]);

export default (
    <Slide bgColor="primary" align="center top">
        <Heading textColor="black" size={4}>
            Web 2.0: Rich Interactive Applications
        </Heading>
        <Text>
            Web Widget Frameworks: EXT, YUI
        </Text>

        <Layout style={{alignItems: "center", justifyContent : "center"}}>
            <Layout style={{flexDirection : "column", alignItems : "center"}}>
                <Image src={extLogo} width="50%"/>
                <Image src={extDemo} width="75%"/>
            </Layout>
            <Image src={yui} width="60%"/>
        </Layout>

    </Slide>
);