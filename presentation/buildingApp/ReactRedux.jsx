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

import react from "./frameworks/react.png";
import redux from "./frameworks/redux.png";

import preloader from "spectacle/lib/utils/preloader";
preloader([react, redux]);


export default (
    <Slide bgColor="primary" align="center top">
        <Heading textColor="black" size={4}>
            Rewrite Plans
        </Heading>

        <List style={{marginBottom : 10}}>
            <ListItem>
               Why React and Redux?
                <List style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                        Functional programming principles, but with pragmatic usage

                    </li>
                    <li>
                        Explicit tracking of state/data/updates; one-way data flow makes reasoning easier

                    </li>
                    <li>
                        Encourages highly testable UI and logic

                    </li>
                    <li>
                        Dev capabilities like time-travel debugging and hot reloading speed up development

                    </li>
                </List>
            </ListItem>
        </List>

        <Layout style={{justifyContent : "space-between", alignItems : "center"}}>
            <Image src={react} width="30%" style={{marginTop : 0, marginBottom : 0}} />
            <Image src={redux} width="40%" style={{marginTop : 0, marginBottom : 0}} />
        </Layout>
        <BlockQuote style={{marginTop : 10}}>
            <div style={{textColor : "black", border: "2px solid black", backgroundColor : "lightgray", fontSize: "32px"}}>
                <b>There is value in the latter, but we value the former more</b>
                <br />Functional over OO; Stateless over Stateful; Clarity over Brevity
            </div>
            <Cite>
                <a href="http://banderson.github.io/reactive-component-ui-presentation/#/2">
                    http://banderson.github.io/reactive-component-ui-presentation/#/2
                </a>
            </Cite>
        </BlockQuote>

    </Slide>
);