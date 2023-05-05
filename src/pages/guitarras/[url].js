import React from "react";

const Producto = ({ guitarra }) => {
  console.log(guitarra);
  return <div>Producto</div>;
};

export default Producto;

export async function getServerSideProps({ query: { url } }) {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
  );
  const { data: guitarra } = await respuesta.json();
  return {
    props: { guitarra },
  };
}
