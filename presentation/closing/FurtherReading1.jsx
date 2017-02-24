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
                Web History
                <List style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                        <a href="https://segment.com/blog/the-deep-roots-of-js-fatigue/">The Deep Roots of Javascript Fatigue</a>
                    </li>
                    <li>
                        <a href="http://www.keepsite.com/a-brief-history-of-the-web/">A Brief History of the Web</a>
                    </li>
                    <li>
                        <a href="https://mgadams.com/modern-javascript-development-part-1-d271f3790c1c">The Golden Age of Javascript</a>
                    </li>
                </List>
            </ListItem>
            <ListItem>
                Modern Web Technologies

                <List style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                        <a href="https://www.infoq.com/articles/state-of-javascript-2016">State of the Javascript Landscape: A Map for Newcomers
                        </a>
                    </li>
                    <li>
                        <a href="http://marcobotto.com/the-hitchhikers-guide-to-the-modern-front-end-development-workflow/">The Hitchhiker's Guide to the Modern Front End Development Workflow
                        </a>
                    </li>
                    <li>
                        <a href="http://jargon.js.org/">Simplified Javascript Jargon
                        </a>
                    </li>
                    <li>
                        <a href="https://medium.com/javascript-and-opinions/state-of-the-art-javascript-in-2016-ab67fc68eb0b">State of the Art Javascript in 2016
                        </a>
                    </li>
                    <li>
                        <a href="http://wesbos.com/overwhelmed-with-web-development/">On Being Overwhelmed With Our Fast-Paced Industry
                        </a>
                    </li>
                    <li>
                        <a href="http://stateofjs.com/">The State of Javascript in 2016: Survey Results</a>
                    </li>
                </List>
            </ListItem>

        </List>

    </Slide>
);