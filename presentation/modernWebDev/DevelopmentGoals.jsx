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


export default (
    <Slide bgColor="primary" align="center top">
        <Heading textColor="black" size={4}>
            Javascript/Client Dev Goals
        </Heading>

        <List>
            <ListItem>
                Minimize bytes sent over the wire

            </ListItem>
            <ListItem>
                Handle browser compatibility issues

            </ListItem>
            <ListItem>
                Fill in gaps in JS standard library and language spec

            </ListItem>
            <ListItem>
                Reuse and share code between apps

            </ListItem>
            <ListItem>
                Build increasingly complex full-blown applications that just happen to live inside a browser

            </ListItem>
        </List>

    </Slide>
);