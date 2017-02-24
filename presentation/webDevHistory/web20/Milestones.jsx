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


import stackOverflow from "./milestones/stackOverflow.gif";

import preloader from "spectacle/lib/utils/preloader";
preloader([stackOverflow]);


export default (
    <Slide bgColor="primary" align="center top">
        <Heading textColor="black" size={3}>
            Web 2.0: Milestones
        </Heading>
        <List>
            <ListItem>AJAX, JSON</ListItem>
            <ListItem>Mobile</ListItem>
        </List>

        <Appear>
            <div>
                <List>
                    <ListItem>Stack Overflow!</ListItem>
                </List>

                <span>
                    <Image src={stackOverflow} width="60%" style={{position : "absolute", right : 0, top : 150}}/>
                </span>
            </div>
        </Appear>


    </Slide>
);