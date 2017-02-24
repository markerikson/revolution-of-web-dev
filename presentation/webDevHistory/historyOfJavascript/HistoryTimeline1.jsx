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
            A Brief History of Javascript
        </Heading>

        <List>
            <ListItem>
                1995: Javascript language invented by Brandon Eich at Netscape
            </ListItem>
            <ListItem>
                1999: ES3 spec finalized; XMLHttpRequest invented by Microsoft
            </ListItem>
            <ListItem>
                2001: JSON format popularized by Douglas Crockford

            </ListItem>
            <ListItem>
                2005: "AJAX" term popularized

            </ListItem>
            <ListItem>
                2006: jQuery invented by John Resig

            </ListItem>
        </List>


    </Slide>
);