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


import backbone from "./clientTechnologies/backbone.png";
import angular from "./clientTechnologies/angular.png";
import ember from "./clientTechnologies/ember.jpg";
import react from "./clientTechnologies/react.png";
import bootstrap from "./clientTechnologies/bootstrap.jpg";
import foundation from "./clientTechnologies/foundation.jpg";
import semantic from "./clientTechnologies/semantic.png";

import preloader from "spectacle/lib/utils/preloader";
preloader([backbone, angular, ember, react, bootstrap, foundation, semantic]);


export default (
    <Slide bgColor="primary" align="center top">
        <Heading textColor="black" size={4}>
            Modern Era: Client Technologies
        </Heading>

        <Layout style={{flexDirection : "column"}}>
            <Layout style={{justifyContent : "space-between", alignItems : "center"}}>
                <Image src={backbone} width="40%"/>
                <Image src={angular} width="40%"/>
            </Layout>

            <Layout style={{justifyContent : "space-between", alignItems : "center"}}>
                <Image src={ember} width="30%"/>
                <Image src={react} width="40%"/>
            </Layout>

            <Layout style={{justifyContent : "space-between", alignItems : "center"}}>
                <Image src={bootstrap} width="30%"/>
                <Image src={foundation} width="40%" height="75%"/>
                <Image src={semantic} width="20%"/>
            </Layout>
        </Layout>


    </Slide>
);