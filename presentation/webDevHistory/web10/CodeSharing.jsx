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


import javascriptKit from "./codeSharing/javascriptKit.png";
import dynamicDrive from "./codeSharing/dynamicDrive.png";
import javascriptSource from "./codeSharing/javascriptSource.png";

import preloader from "spectacle/lib/utils/preloader";
preloader([javascriptKit, dynamicDrive, javascriptSource]);


export default (
    <Slide bgColor="primary" align="center top">
        <Heading textColor="black" size={3}>
            Web 1.0: Code Sharing
        </Heading>
        <Text>
            Script Sites
        </Text>

        <Image src={javascriptKit} width="50%" style={{left: 0, position: "absolute"}}/>
        <Image src={dynamicDrive} width="65%" style={{position: "relative", zIndex: 10, marginTop : 50}}/>
        <Image src={javascriptSource} width="50%" style={{position: "absolute", right: 0, zIndex: 20, marginTop : 200}} />

    </Slide>
);