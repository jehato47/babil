import React from "react";
import Header from "./header";
import { Container } from "semantic-ui-react";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <Container style={{ marginTop: "10px" }}>
      <Head>
        <link
          async
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
        />
      </Head>

      <div className="layout">
        <Header />
        <div className="content">{children}</div>
      </div>
    </Container>
  );
}
