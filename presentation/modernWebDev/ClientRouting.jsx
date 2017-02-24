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
            Client-Side Routing
        </Heading>

        <List>
            <ListItem>
                "Routing": mapping URLs to behavior, including extracting data parameters from the URL

            </ListItem>
            <ListItem >
                Originally a server-only concept

            </ListItem>
            <ListItem>
                Modern web apps use routing on the client to enable fast updates and "deep linking"

                <List  style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                        Rendering of UI

                    </li>
                    <li>
                        Data fetching

                    </li>
                </List>
            </ListItem>
            <ListItem>
                All major framework ecosystems include routers

            </ListItem>
        </List>

    </Slide>
);