import React from "react";
import Link from "next/link";
import Layout from "@/components/layout";

const Nosotros = () => {
  return (
    <>
      <Layout
        title={"Nosotros"}
        description={"Sobre nosotros, GuitarLA, tienda de música"}
      >
        <div>Nosotros</div>
        <Link href="/">Ir a Inicio</Link>
      </Layout>
    </>
  );
};

export default Nosotros;
