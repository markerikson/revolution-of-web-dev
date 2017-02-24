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




import yahoo from "./typicalSite/yahoo.jpg";
import geocities from "./typicalSite/geocities.png";
import construction from "./typicalSite/construction.jpg";
import viewInNetscape from "./typicalSite/netscapenow.gif";
import viewInIE from "./typicalSite/ie5.gif";

import preloader from "spectacle/lib/utils/preloader";
preloader([yahoo, geocities, construction, viewInNetscape, viewInIE]);

export default (
    <Slide bgColor="primary" align="center top">
        <Heading textColor="black" size={3}>
            Web 1.0 (1991-2001)
        </Heading>
        <Text>
            Typical site: static HTML, hosted on GeoCities or a university
            page, and written in FrontPage, DreamWeaver, or Notepad
        </Text>

        <Image src={yahoo} width="50%" style={{left: 0, position: "absolute"}}/>
        <Image src={geocities} width="50%" style={{position: "relative", zIndex: 10, marginTop : 50}}/>
        <Image src={construction} width="50%" style={{position: "absolute", right: 0, zIndex: 20, marginTop : 100}} />

        <Appear>
          <span>
            <Image src={viewInNetscape} width={250} style={{
              position : "absolute",
              margin : "auto",
              paddingTop : 20,
              left : 0,
              right : 0,
              zIndex : 30,
            }}/>

            <Image src={viewInIE} width={250} style={{
              position : "absolute",
              margin : "auto",
              paddingTop : 105,
              left : 0,
              right : 0,
              zIndex : 30,
            }}/>
          </span>
        </Appear>
    </Slide>
);