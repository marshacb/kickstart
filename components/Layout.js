import React from "react";
import { Container } from "semantic-ui-react";
import Header from "./Header";
import "semantic-ui-css/semantic.min.css";
// import Head from "next/head";

const Layout = (props) => {
  return (
    <Container>
      {/* (not working) <Head>
        <link
          async
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@${props.versions.sui}/dist/semantic.min.css"
        />
        <script
          async
          src="//cdn.jsdelivr.net/npm/semantic-ui@${props.versions.sui}/dist/semantic.min.js"
        ></script>
      </Head> */}
      <Header />
      {props.children}
    </Container>
  );
};

export default Layout;
