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


import gwtLogo from "./ria/gwtLogo.png";
import gwtArchitecture from "./ria/gwtArchitecture.jpg";

import preloader from "spectacle/lib/utils/preloader";
preloader([gwtLogo, gwtArchitecture]);


export default (
    <Slide bgColor="primary" align="center top">
        <Heading textColor="black" size={4}>
            Web 2.0: Rich Interactive Applications
        </Heading>
        <Text>
            Web Widget Frameworks: GWT
        </Text>

        <Layout style={{alignItems: "center", justifyContent : "center"}}>
            <Image src={gwtLogo} width="35%" />
            <Image src={gwtArchitecture} width="70%" />
        </Layout>

    </Slide>
);