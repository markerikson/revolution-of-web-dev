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
            Rewrite Plans
        </Heading>

        <List>
            <ListItem>
                v2 prototype stack
                <List style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                        Language: ES6

                    </li>
                    <li>
                        UI framework: React

                    </li>
                    <li>
                        Data management: Redux

                    </li>
                    <li>
                        Build tool: Webpack+Babel

                    </li>
                    <li>
                        Testing: Mocha

                    </li>
                    <li>
                        3D globe: Cesium

                    </li>
                    <li>
                        Appearance: Semantic-UI

                    </li>
                </List>
            </ListItem>

        </List>

    </Slide>
);