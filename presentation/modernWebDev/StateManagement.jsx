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
            State/Data Management
        </Heading>

        <List>
            <ListItem>
                Built-In
                <List style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                        Backbone: Models/Collections
                    </li>
                    <li>
                        Ember: Ember Data
                    </li>
                    <li>
                        Angular 1: Services/Controllers
                    </li>
                </List>
            </ListItem>
            <ListItem >
                React
                <List style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                        Local component state

                    </li>
                    <li>
                        "Flux" pattern (one-way data flow)

                    </li>
                    <li>
                        Redux (single state tree, immutable updates; "Flux taken to its logical conclusion")

                    </li>
                    <li>
                        MobX (dependency tracking with observables)

                    </li>
                </List>
            </ListItem>
            <ListItem>
               Angular 2
                <List  style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                        Services/Controllers
                    </li>
                    <li>
                        Redux; Observables
                    </li>
                </List>
            </ListItem>
        </List>

    </Slide>
);