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
            Javascript/Client Dev Goals
        </Heading>

        <BlockQuote>
            <div style={{textColor : "black", border: "2px solid black", backgroundColor : "lightgray"}}>
                <p style={{fontSize : 28}}>
                    <b>People assume that writing an APPLICATION for a browser is easy,</b>
                    which is why people get stuck maintaining monstrosities that are
                    disorganized, not composed and tens of thousands of lines of spaghetti.
                    <b> Writing an application in the browser deserves just as much respect as
                    one would give towards setting up the database & schema or creating a
                    service layer.</b>  That lack of respect for front end code is a big reason
                    as to why front end projects have [lousy] code.
                </p>
                <p style={{fontSize : 24}}>
                    Yes, you'll need (webpack|jspm|browserify) with (babel|typescript), 
                    and likely (postcss|less|scss) in place closer to the start than the 
                    end. Much like if you're writing code for a desktop application you'll 
                    likely need at least an IDE installed, and potentially several libraries 
                    close to the start.  … What does it take to get a Java application going? 
                    Maven, some build system, some other tooling, and understanding the 
                    component/class hierarchies? It's not any easier than working with any new tooling.
                </p>
            </div>
            <Cite>
                <a href="https://news.ycombinator.com/item?id=11782234" >
                    https://news.ycombinator.com/item?id=11782234
                </a>
            </Cite>
        </BlockQuote>

    </Slide>
);