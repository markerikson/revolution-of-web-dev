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
            Javascript Frameworks
        </Heading>

        <BlockQuote>
            <div style={{textColor : "black", border: "2px solid black", backgroundColor : "lightgray"}}>

                <p style={{fontSize : 24}}>
                    <b>
                        Every framework can be viewed as an attempt to say "the hardest part of
                        writing a webapp is $X, so here's some code to make that easier".
                    </b><br />


                <span style={{fontSize : 22}}>
                    Knockout.js is basically what you get when a dev says "the hardest part of
                    writing a webapp is implementing two-way data binding", which you can tell
                    because that's basically 90% of what the framework does. … Similarly,
                    Backbone is the result of feeling like the hard parts are fetching and
                    persisting models to a REST API, and client side routing; that's basically
                    all it does. Figuring out how to turn your models into HTML is easy
                    (apparently), but models are hard, so it helps you.

                </span><br />
                <span style={{fontSize : 22}}>
                    <b>Angular is what you get if you think the biggest problem with writing webapps
                    is that Javascript isn't Java; Ember that it's not Ruby.</b> (I kid. But I'm less
                    familiar with those frameworks.) And so on. Everyone has their own ideas of
                    what's hard to solve.

                </span><br />
                <span style={{fontSize : 24}}>
                    <b>React + Flux is based on the idea that what's really hard with writing
                    webapps is non-deterministic behaviour and unclear data flow.</b> And if you've
                    worked on a large Knockout or Backbone project, you're probably inclined
                    to agree.

                </span>
                </p>

            </div>
            <Cite>
                <a href="https://www.reddit.com/r/reactjs/comments/39wsfi/what_are_pros_and_cons_of_using_reactjsflux/cs7msvp">
                    Reddit /u/Cody_Chaos
                </a>
            </Cite>
        </BlockQuote>

    </Slide>
);