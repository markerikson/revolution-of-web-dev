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
                GWT concerns
                <List style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                        Upgrade issues and uncertain future of the framework (possible upcoming backwards-incompatible version)

                    </li>
                    <li>
                        Slower development tools

                    </li>
                    <li>
                        GWT-specific client-server communication and coupling

                    </li>
                </List>
            </ListItem>
            <ListItem>
                v2 prototype/analysis goals
                <List style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                        Non-deprecated tech stack with modern tools

                    </li>
                    <li>
                        Improved developer experience (fast rebuilds, hot reloading, easy testing)

                    </li>
                    <li>
                        Better maintainability (code structure, debugging, dataflow / reasoning)

                    </li>
                </List>
            </ListItem>

        </List>

    </Slide>
);