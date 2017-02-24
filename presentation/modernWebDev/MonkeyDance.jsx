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
            Javascript/Client Challenges
        </Heading>

        <BlockQuote>
            <div style={{textColor : "black", border: "2px solid black", backgroundColor : "lightgray", fontSize: "40px"}}>
                <b>The by-design purpose of JavaScript was to make the monkey dance when
                you moused over it.</b> Scripts were often a single line. We considered
                ten line scripts to be pretty normal, hundred line scripts to be huge,
                and thousand line scripts were unheard of. The language was absolutely
                not designed for programming in the large, and our implementation
                decisions, performance targets, and so on, were based on that assumption.

            </div>
            <Cite>
                Eric Lippert, former IE/JS developer at Microsoft <br />
                <a href="http://programmers.stackexchange.com/a/221658/214387" >
                    http://programmers.stackexchange.com/a/221658/214387
                </a>
            </Cite>
        </BlockQuote>

    </Slide>
);