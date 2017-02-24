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


import j2ee from "./serverTechnologies/j2ee.png";
import aspnet from "./serverTechnologies/aspnet.jpg";
import enterpriseArchitecture from "./serverTechnologies/enterpriseArchitecture.jpg";
import django from "./serverTechnologies/django.png";
import rails from "./serverTechnologies/rails.png";
import lamp from "./serverTechnologies/lamp.jpg";

import preloader from "spectacle/lib/utils/preloader";
preloader([j2ee, aspnet, enterpriseArchitecture, django, rails, lamp])

export default (
    <Slide bgColor="primary" align="center top">
        <Heading textColor="black" size={3}>
            Web 2.0: Server Technologies
        </Heading>
        <Text>
            J2EE, ASP.NET, Rails, Django, LAMP;  Monolithic architectures


        </Text>


        <Layout>
            <Layout style={{flexDirection: "column"}}>
                <Layout style={{alignItems : "center"}}>
                    <Image src={j2ee} width="50%"/>
                    <Image src={aspnet} width="50%"/>
                </Layout>
                <Image src={enterpriseArchitecture} width="75%"/>

            </Layout>

            <Layout style={{flexDirection : "column"}}>
                <Image src={django} width="35%"/>
                <Image src={rails} width="60%"/>
                <Image src={lamp} width="75%"/>
            </Layout>
        </Layout>


    </Slide>
);