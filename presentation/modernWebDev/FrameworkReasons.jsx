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
            Javascript Frameworks?!?
        </Heading>

        <List>
            <ListItem>
                Why do frameworks exist?
                <List style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                        Keep state out of the DOM

                    </li>
                    <li>
                        Higher-level abstractions

                    </li>
                    <li>
                        Code organization

                    </li>
                </List>
            </ListItem>
            <ListItem >
                Pros
                <List style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                        Common concepts that can be shared between apps and developers

                    </li>
                    <li>
                        Large communities, shared knowledge, documentation, bug fixes

                    </li>
                    <li>
                        Better app structure through tools and guidelines

                    </li>
                </List>
            </ListItem>
            <ListItem>
               Cons
                <List  style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                        Learning curve

                    </li>
                    <li>
                        Minimum requirements for size

                    </li>
                    <li>
                        Setup and infrastructure

                    </li>
                </List>
            </ListItem>
        </List>

    </Slide>
);