import React from "react";

const Producto = ({ guitarra }) => {
  console.log(guitarra);
  return <div>Producto</div>;
};

export default Producto;

export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras`);
  const { data: guitarras } = await respuesta.json();
  // El objeto paths es un arreglo de objetos que contiene los parámetros de cada página y debe tener la siguiente estructura:
  // {params: {url: "guitarra-1", ...},}
  const paths = guitarras.map((guitarra) => ({
    params: { url: guitarra.attributes.url },
  }));
  return {
    paths,
    // fallback es un booleano que indica si se debe mostrar una página 404 si no se encuentra el parámetro en paths
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }) {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
  );
  const { data: guitarra } = await respuesta.json();
  return {
    props: { guitarra },
  };
}

// export async function getServerSideProps({ query: { url } }) {
//     const respuesta = await fetch(
//       `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
//     );
//     const { data: guitarra } = await respuesta.json();
//     return {
//       props: { guitarra },
//     };
//   }
