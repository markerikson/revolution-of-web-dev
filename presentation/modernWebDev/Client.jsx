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
            Dev Trends: Client
        </Heading>

        <List>
            <ListItem>
                Component-based architectures
            </ListItem>
            <ListItem>
                "Virtual DOM"

            </ListItem>
            <ListItem>
                CSS-in-JS

            </ListItem>
            <ListItem>
               WebGL, Web Workers, Service Workers
            </ListItem>
            <ListItem>
                Alternate languages (Elm, Clojurescript)
            </ListItem>
        </List>

    </Slide>
);