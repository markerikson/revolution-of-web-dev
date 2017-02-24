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


import applet1 from "./interactivity/applet1.gif";
import applet2 from "./interactivity/applet2.gif";
import activex from "./interactivity/activex.gif";
import dhtml from "./interactivity/dhtml.png";

import preloader from "spectacle/lib/utils/preloader";
preloader([applet1, applet2, activex, dhtml]);

export default (
    <Slide bgColor="primary" align="center top">
        <Heading textColor="black" size={3}>
            Web 1.0: Interactivity
        </Heading>
        <Text>
            HTML forms, Java applets, ActiveX controls, and DHTML
        </Text>
        <Image src={applet1} width="50%" style={{left: 0, position: "absolute"}} />
        <Image src={applet2} width="50%" style={{left: 0, position: "absolute", marginTop: 200, zIndex : 10}} />
        <Image src={dhtml} width="50%" style={{right: 0, position: "absolute"}} />
        <Image src={activex} width="50%" style={{right: 0, position: "absolute", marginTop : 200, zIndex: 10}} />
    </Slide>
);