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


import flash from "./ria/flash.jpg";
import silverlight from "./ria/silverlight.png";
import flashUpdate from "./ria/flashUpdate.png";

import preloader from "spectacle/lib/utils/preloader";
preloader([flash, silverlight, flashUpdate]);


export default (
    <Slide bgColor="primary" align="center top">
        <Heading textColor="black" size={4}>
            Web 2.0: Rich Interactive Applications
        </Heading>
        <Text>
            Plugins: Flash, Silverlight
        </Text>

        <Layout style={{alignItems: "center", justifyContent : "center"}}>
            <Image src={flash} width="50%" style={{paddingTop: 25}}/>
            <Image src={silverlight} width="35%" />
        </Layout>

        <Appear>
            <div style={{position : "relative"}}>
                <Image src={flashUpdate} width="60%" style={{position : "absolute", marginTop : -200, left : "0", right : "0"}} />
            </div>
        </Appear>

    </Slide>
);