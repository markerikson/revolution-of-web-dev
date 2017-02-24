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

import backbone from "./frameworks/backbone.png";
import ember from "./frameworks/ember.jpg";

import preloader from "spectacle/lib/utils/preloader";
preloader([backbone, ember]);


export default (
    <Slide bgColor="primary" align="center top">
        <Heading textColor="black" size={4}>
            Javascript Frameworks
        </Heading>

        <List>
            <ListItem>
                <Image src={backbone} width="40%" style={{marginBottom : 0}}/>
                <List style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                        Small smart wrappers around JS objects/arrays (Model, Collection), jQuery selectors (View), and a pubsub Events implementation

                    </li>
                    <li>
                        Building blocks for creating your own higher-level framework (such as Marionette)

                    </li>
                    <li>
                        Still usable, but considered obsolete - community has mostly migrated to React

                    </li>
                </List>
            </ListItem>
            <ListItem >
                <Image src={ember}  width="20%" style={{marginBottom : 0}}/>
                <List style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                        Lots of built-in functionality, including a common CLI toolset; complete stack

                    </li>
                    <li>
                        Convention over configuration; very opinionated

                    </li>
                    <li>
                        Incremental upgrades (new view rendering engine)

                    </li>
                </List>
            </ListItem>
        </List>

    </Slide>
);