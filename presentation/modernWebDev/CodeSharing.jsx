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
            Modern Tools: Code Sharing
        </Heading>

        <List>
            <ListItem>
                Module Formats

                <List style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                        AMD (Asynchronous Module Definition): designed for async browser loading


                    </li>
                    <li>
                        CommonJS: designed for sync loading from filesystem with Node

                    </li>
                    <li>
                        ES6: designed to be statically analyzed for build optimizations

                    </li>
                </List>
            </ListItem>
            <ListItem >
                Packaging and Execution
                <List style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                        Node.js
                        <List style={{paddingLeft : null, fontSize: 24}}>
                            <li>
                                Javascript runtime for execution outside the browser

                            </li>
                            <li>
                                The V8 JS engine, extracted from Chrome and wrapped up with additional APIs for system interaction (file system, sockets, … )

                            </li>
                            <li>
                                Required for all server/build tools written in Javascript

                            </li>
                        </List>

                    </li>
                    <li>
                        NPM
                        <List style={{paddingLeft : null, fontSize: 24}}>
                            <li>
                                Package manager included with Node


                            </li>
                            <li>
                                Create, install, and manage Javascript packages and dependencies


                            </li>
                        </List>
                    </li>
                </List>
            </ListItem>
        </List>

    </Slide>
);