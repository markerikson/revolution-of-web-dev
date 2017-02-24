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


import ajax from "./clientTechnologies/ajax.jpg";
import mootools from "./clientTechnologies/mootools.png";
import prototype from "./clientTechnologies/prototype.png";
import jQuery from "./clientTechnologies/jQuery.png";

import preloader from "spectacle/lib/utils/preloader";
preloader([ajax, mootools, prototype, jQuery]);

export default (
    <Slide bgColor="primary" align="center top">
        <Heading textColor="black" size={3}>
            Web 2.0: Client Technologies
        </Heading>


        <Image src={ajax} width="35%"/>
        <Layout style={{alignItems : "center"}}>
            <Layout style={{alignItems : "center", justifyContent : "center"}}>
                <Image src={mootools} width="35%" style={{marginRight : 10}}/>
                <Image src={prototype} style={{marginLeft : 10}}/>
            </Layout>
        </Layout>

        <Appear>
            <div style={{position : "relative"}}>
                <Image src={jQuery} width="75%" style={{position : "absolute", marginTop : -175, left : "0", right : "0"}} />
            </div>
        </Appear>

    </Slide>
);