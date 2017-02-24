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


import json from "./dataTransfer/json.png";
import json1 from "./dataTransfer/json1.jpg";
import json2 from "./dataTransfer/json2.png";
import json3 from "./dataTransfer/json3.png";

import preloader from "spectacle/lib/utils/preloader";
preloader([json, json1, json2, json3]);



export default (
    <Slide bgColor="primary" align="center top">
        <Heading textColor="black" size={3}>
            Modern Era: Data Transfer
        </Heading>

        <Layout style={{flexDirection : "column"}}>
            <Layout style={{justifyContent : "center", alignItems : "center"}}>
                <Text style={{marginRight : 10}}>JSON over HTTP</Text>
                <Image src={json} width="30%" style={{marginLeft : 10}} />
            </Layout>

            <Layout>
                <Image src={json2} width="50%" />
                <Layout style={{flexDirection : "column", justifyContent : "space-between"}}>
                    <Image src={json1} width="50%"/>
                    <Image src={json3} width="50%" />
                </Layout>
            </Layout>

        </Layout>
        


    </Slide>
);