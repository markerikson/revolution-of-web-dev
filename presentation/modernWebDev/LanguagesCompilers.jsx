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
            Modern Tools: Languages/Compilers
        </Heading>

        <List>
            <ListItem>
                ES6/ES2015 (and beyond)
                <List style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                        Current version of the Javascript language spec

                    </li>
                    <li>
                        Ongoing implementation by browsers and JS engines

                    </li>
                    <li>
                        Future proposed language features in staged development

                    </li>
                </List>
            </ListItem>
            <ListItem >
                Babel
                <List style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                        Plugin-based Javascript cross-compiler

                    </li>
                    <li>
                        Widely used to compile ES6 and other language features to backwards-compatible ES5

                    </li>
                </List>
            </ListItem>
            <ListItem>
               TypeScript
                <List  style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                        Statically typed superset of ES6 from Microsoft

                    </li>
                </List>
            </ListItem>
            <ListItem>
                SASS/LESS
                <List  style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                        Compile-to-CSS languages with variables, control flow, selector nesting

                    </li>
                </List>
            </ListItem>
        </List>

    </Slide>
);