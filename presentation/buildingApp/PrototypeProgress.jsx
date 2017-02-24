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
            Prototype Progress
        </Heading>

        <List>
            <ListItem>
               v2 prototype demo
                <List style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                        File watching and recompiling

                    </li>
                    <li>
                        UI hot reloading

                    </li>
                    <li>
                        Data editing

                    </li>
                    <li>
                        Redux DevTools and time travel debugging

                    </li>
                    <li>
                        Test running

                    </li>
                </List>
            </ListItem>

        </List>

    </Slide>
);