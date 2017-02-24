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


import html5 from "./html5/html5.jpg";
import webWorkers from "./html5/webWorkers.png";
import webSockets from "./html5/webSockets.png";
import webGL from "./html5/webGL.png";
import localStorage from "./html5/localStore.png";
import flexbox from "./html5/flexbox.png";

import preloader from "spectacle/lib/utils/preloader";
preloader([html5, webWorkers, webSockets, webGL, localStorage, flexbox]);


export default (
    <Slide bgColor="primary" align="center top">
        <Heading textColor="black" size={3}>
            Modern Era: HTML5
        </Heading>

        <Layout style={{flexDirection : "column"}}>
            <Layout style={{justifyContent : "space-between", alignItems : "flex-end"}}>
                <Image src={webWorkers} width="25%"/>
                <Image src={html5} width="60%"/>
                <Image src={webSockets} width="25%" />
            </Layout>

            <Layout style={{justifyContent : "space-between", alignItems : "center"}}>
                <Image src={webGL} width="40%"/>
                <Image src={localStorage} width="40%" height="40%"/>
                <Image src={flexbox} width="40%"/>
            </Layout>
        </Layout>


    </Slide>
);