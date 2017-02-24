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

import blink from "./milestones/blink.gif";
import marquee from "./milestones/marquee.gif";

import preloader from "spectacle/lib/utils/preloader";
preloader([blink, marquee]);

export default (
    <Slide bgColor="primary" align="center top">
        <Heading textColor="black" size={3}>
            Web 1.0: Milestones
        </Heading>
        <List>
            <ListItem>
                Invention of HTML, CSS, and Javascript
            </ListItem>
            <ListItem>
                Invention of Java and Flash
            </ListItem>
            <ListItem>
                {`Multimedia via <img> and <iframe> tags`}
            </ListItem>
        </List>
        <Appear>
            <div>
                <List>
                    <ListItem>
                        {`The <blink> and <marquee> tags!`}
                    </ListItem>
                </List>
                <Image src={blink} />
                <Image src={marquee} />
            </div>
        </Appear>

    </Slide>
);