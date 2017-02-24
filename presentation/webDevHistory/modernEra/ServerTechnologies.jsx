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


import mean from "./serverTechnologies/mean.jpg";
import play from "./serverTechnologies/play.png";
import flask from "./serverTechnologies/flask.png";
import dropwizard from "./serverTechnologies/dropwizard.png";
import aws from "./serverTechnologies/aws.png";
import heroku from "./serverTechnologies/heroku.png";
import azure from "./serverTechnologies/azure.png";

import preloader from "spectacle/lib/utils/preloader";
preloader([mean, play, flask, dropwizard, aws, heroku, azure]);


export default (
    <Slide bgColor="primary" align="center top">
        <Heading textColor="black" size={4}>
            Modern Era: Server Technologies
        </Heading>

        <Layout>
            <Layout style={{flexDirection: "column", justifyContent : "space-between"}}>
                <Image src={mean} width="60%"/>
                <Image src={play} width="60%"/>
            </Layout>

            <Layout style={{flexDirection : "column", justifyContent : "space-between"}}>
                <Image src={aws} width="50%"/>
                <Image src={heroku} width="50%"/>
                <Image src={azure} width="65%"/>
            </Layout>

            <Layout style={{flexDirection: "column", justifyContent : "space-between"}}>
                <Image src={flask} width="60%"/>
                <Image src={dropwizard} width="75%"/>
            </Layout>
        </Layout>


    </Slide>
);