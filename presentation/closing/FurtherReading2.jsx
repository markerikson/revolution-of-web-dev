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
            Further Reading
        </Heading>

        <List>
            <ListItem>
                React, Redux, and More
                <List style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                        <a href="https://facebook.github.io/react/">React documentation</a>
                    </li>
                    <li>
                        <a href="http://redux.js.org/">Redux documentation</a>
                    </li>
                    <li>
                        <a href="https://github.com/markerikson/react-redux-links">React/Redux Links</a>: curated tutorial and resource
                        links for React, Redux, ES6, Functional Programming, Webpack,
                        and related topics
                    </li>
                    <li>
                        <a href="http://www.reactiflux.com/">Reactiflux on Discord</a>: chat channels for React
                        and Javascript-related topics
                    </li>
                </List>
            </ListItem>

        </List>

    </Slide>
);