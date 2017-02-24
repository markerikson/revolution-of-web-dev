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
            Modern Tools: Testing
        </Heading>

        <List>
            <ListItem>
                Test runners
                <List style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                        Mocha, Jasmine, Tape, Jest (primarily outside the browser)
                    </li>
                    <li>
                        Karma (in a real browser)
                    </li>
                </List>
            </ListItem>
            <ListItem >
                Mocking and test behavior

                <List style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                        Chai, Expect (test assertions)
                    </li>
                    <li>
                        Sinon, JSDOM (network/function/DOM mocking)
                    </li>
                </List>
            </ListItem>
            <ListItem>
                Integration testing

                <List  style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                        Selenium (integration tests by "driving" a browser
                    </li>
                    <li>
                        PhantomJS (headless browser for automated in-browser unit testing)
                    </li>
                </List>
            </ListItem>
            <ListItem>
                Linting: ESLint
            </ListItem>
            <ListItem>
                Static typing: Flow
            </ListItem>

        </List>

    </Slide>
);