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


import githubLogo from "./codeSharing/githubLogo.png";
import githubPage from "./codeSharing/githubPage.png";
import npmLogo from "./codeSharing/npmLogo.png";
import npmPage from "./codeSharing/npmPage.png";

import preloader from "spectacle/lib/utils/preloader";
preloader([githubLogo, githubPage, npmLogo, npmPage]);


export default (
    <Slide bgColor="primary" align="center top">
        <Heading textColor="black" size={3}>
            Modern Era: Code Sharing
        </Heading>

        <Layout>
            <Layout style={{flexDirection : "column", justifyContent : "space-between"}}>
                <Image src={githubLogo} width="50%" />
                <Image src={githubPage} width="95%" />
            </Layout>
            <Layout style={{flexDirection : "column", justifyContent : "space-between"}}>
                <Image src={npmLogo} width="50%" style={{marginTop : 25}}/>
                <Image src={npmPage} width="100%" />
            </Layout>
        </Layout>
        


    </Slide>
);