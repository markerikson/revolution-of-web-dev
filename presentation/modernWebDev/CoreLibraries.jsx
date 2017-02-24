// Import React
import React from "react";

// Import Spectacle Core tags
import {
    Appear,
    BlockQuote,
    Cite,
    Code,
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

const InlineCode = ({children}) => (
    <pre style={{display: "inline", backgroundColor : "lightGray", fontSize: 24}}>
        {children}
    </pre>
)


export default (
    <Slide bgColor="primary" align="center top">
        <Heading textColor="black" size={4}>
            Modern Tools: Core Libraries
        </Heading>


        <List>

            <ListItem>
                Express
                <List style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                        HTTP server library for node
                    </li>
                    <li>
                        Middleware pipeline allows flexible handling of request/response lifecycle

                    </li>
                </List>
            </ListItem>


            <ListItem >
                jQuery

                <List style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                        DOM manipulation and AJAX requests; Abstracts out many differences between browsers


                    </li>
                    <li>
                        Single most widely used JS library

                    </li>
                    <li>
                        <InlineCode>
                            $("#someId").toggleClass("active")

                        </InlineCode>
                    </li>
                </List>
            </ListItem>
            <ListItem>
                Underscore / Lodash

                <List  style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                        Extremely useful library of utility functions

                    </li>
                    <li>
                        Lodash started as an optimized fork of Underscore, then added many more functions

                    </li>
                    <li>
                        Functions for arrays (<InlineCode>_.first</InlineCode>),
                        collections (<InlineCode>_.forEach</InlineCode>),
                        objects (<InlineCode>_.pick</InlineCode>),
                        strings (<InlineCode>_.camelCase</InlineCode>),
                        functions (<InlineCode>_.debounce</InlineCode>), and more

                    </li>
                </List>
            </ListItem>

        </List>

    </Slide>
);