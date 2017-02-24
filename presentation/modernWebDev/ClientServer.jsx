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
            Dev Trends: Client/Server
        </Heading>

        <List>
            <ListItem>
                Large-scale data transfer schemas/tools
                <List style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                        GraphQL, Falcor
                    </li>
                </List>
            </ListItem>
            <ListItem>
                "Isomorphic" / "Universal" Javascript apps

                <List style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                        Server rendering
                    </li>
                </List>
            </ListItem>
            <ListItem>
                Javascript everywhere
                <List style={{paddingLeft : null, fontSize: 28}}>
                    <li>
                        Cross-platform toolkits (Cordova, Ionic)

                    </li>
                    <li>
                        Desktop apps (Electron)

                    </li>
                    <li>
                        Mobile apps (React Native)

                    </li>
                </List>
            </ListItem>
        </List>

    </Slide>
);