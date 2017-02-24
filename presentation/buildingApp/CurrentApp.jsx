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
            Current App
        </Heading>

        <List>
            <ListItem>
                Geospatial visualization tool for internal use
            </ListItem>
            <ListItem>
                Version 1
                <List style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                       GWT + SmartGWT

                    </li>
                    <li>
                        Google Earth Plugin
                    </li>
                    <li>
                        Play Framework
                    </li>
                </List>
            </ListItem>

        </List>

    </Slide>
);