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
            Modern Tools: Build Tools
        </Heading>

        <List>
            <ListItem>
                Build Steps
                <List style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                        Compilation: compile ES6/Typescript to widely compatible ES5


                    </li>
                    <li>
                        Bundling: combine multiple files into a single output file


                    </li>
                    <li>
                        Minification: Remove whitespace/ comments, rename variables for length


                    </li>
                    <li>
                        Code splitting: split certain features into separate bundles to be loaded on demand

                    </li>
                </List>
            </ListItem>
            <ListItem >
                Task runners:

                <List style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                        Grunt: configure separate independent tasks via plugins

                    </li>
                    <li>
                        Gulp: pipe data through a series of transformation steps


                    </li>
                </List>
            </ListItem>
            <ListItem>
               Module builders:
                <List  style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                        Browserify : transform CommonJS-format modules for use in the browser

                    </li>
                    <li>
                        Webpack: transform <i>anything</i> as a module, primarily for use in a browser (AMD/CJS/ES6 modules, CSS, images, … )

                    </li>
                </List>
            </ListItem>

        </List>

    </Slide>
);