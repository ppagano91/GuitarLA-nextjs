import React from "react";
import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Layout({ children, title = "", description = "" }) {
  return (
    <>
      <Head>
        <title>{`GuitarLA - ${title}`}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}
