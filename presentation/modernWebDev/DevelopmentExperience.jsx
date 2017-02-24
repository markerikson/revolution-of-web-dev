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
            Modern Tools: Dev Experience
        </Heading>

        <List>
            <ListItem>
                File watching / live reloading
                <List style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                        Watch source files for changes, recompile, possibly reload the entire page
                    </li>
                </List>
            </ListItem>
            <ListItem >
                Sourcemaps

                <List style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                        Debugging information to correlate lines from input source
                        files to lines of build output files.  Allows debugging of
                        "original" code in the browser.
                    </li>
                </List>
            </ListItem>
            <ListItem>
                Browser dev tools

                <List  style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                        Element inspector, CSS inspector, script debugger, network traffic monitor
                    </li>
                </List>
            </ListItem>
            <ListItem>
                Hot reloading

                <List  style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                        Swapping of recompiled code modules on the fly

                    </li>
                    <li>
                        Allows a "live editing / WYSIWYG" development experience

                    </li>
                    <li>
                        Works best with functional programming techniques

                    </li>
                </List>
            </ListItem>

        </List>

    </Slide>
);