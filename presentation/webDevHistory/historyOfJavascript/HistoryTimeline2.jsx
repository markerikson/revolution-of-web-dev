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
                2008: "Javascript: the Good Parts" written by Douglas Crockford

            </ListItem>
            <ListItem>
                2009: ES5 spec finalized; Node.js invented by Ryan Dahl

            </ListItem>
            <ListItem>
                2010: Underscore.js, Backbone.js, and Coffeescript invented by Jeremy Ashkenas
            </ListItem>
            <ListItem>
                2015: ES6 spec finalized
            </ListItem>
        </List>


    </Slide>
);