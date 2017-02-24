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

import angular from "./frameworks/angular.png";
import react from "./frameworks/react.png";

import preloader from "spectacle/lib/utils/preloader";
preloader([angular, react]);


export default (
    <Slide bgColor="primary" align="center top">
        <Heading textColor="black" size={4}>
            Javascript Frameworks
        </Heading>

        <List>
            <ListItem>
                <Image src={angular} width="40%" style={{marginBottom : 0}}/>
                <List style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                        Widely used; complete stack

                    </li>
                    <li>
                        Two-way data binding with "JS in HTML", and dependency injection

                    </li>
                    <li>
                        2.0 just released: complete rewrite using TypeScript / RxJS,
                        mostly backwards incompatible

                    </li>
                </List>
            </ListItem>
            <ListItem >
                <Image src={react}  width="20%" style={{marginBottom : 0}}/>
                <List style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                        Usually described as "The V in MVC", and "a library, not a framework"

                    </li>
                    <li>
                        Pick-and-choose related pieces that fit your situation (state management, routing, …)

                    </li>
                    <li>
                        Functional programming influences ( UI = f(state) , one-way data flow)

                    </li>
                    <li>
                        Encapsulated components and tag-like JSX syntax ("HTML in JS")

                    </li>
                    <li>
                        Frequently used with a state management library like Redux or MobX

                    </li>
                </List>
            </ListItem>
        </List>

    </Slide>
);