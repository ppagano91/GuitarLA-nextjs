import React from "react";
import Layout from "@/components/layout";
import ListadoGuitarras from "@/components/listado-guitarras";

const Tienda = ({ guitarras }) => {
  console.log(guitarras);
  return (
    <>
      <Layout
        title={"Tienda"}
        description={
          "Tienda virtual, venta de guitarras, instrumentos y mucho más"
        }
      >
        <main className="contenedor">
          <h2 className="heading">Nuestra Colección</h2>
          <ListadoGuitarras />
        </main>
      </Layout>
    </>
  );
};

export default Tienda;

export async function getStaticProps() {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?populate=imagen`
  );
  const { data: guitarras } = await respuesta.json();
  // console.log(data);
  return { props: { guitarras } };
}
