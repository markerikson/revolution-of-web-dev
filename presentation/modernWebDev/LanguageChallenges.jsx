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
            Javascript/Client Challenges
        </Heading>

        <List>
            <ListItem>
                No built-in module definition system
            </ListItem>
            <ListItem>
                No encapsulation

            </ListItem>
            <ListItem>
                Prototypal-based inheritance system unlike most languages

            </ListItem>
            <ListItem>
                No static type declarations or compilation

            </ListItem>
            <ListItem>
                Dynamically modified objects and data

            </ListItem>
            <ListItem>
                Minimal standard library

            </ListItem>
            <ListItem>
                Variations in browser capabilities

            </ListItem>
            <ListItem>
                Document layout model repurposed for application layouts

            </ListItem>
        </List>

    </Slide>
);