import Image from "next/image";
import React from "react";
import Layout from "@/components/layout";
import styles from "@/styles/Guitarras.module.css";

const CANTIDAD_GUITARRAS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Producto = ({ guitarra }) => {
  const { nombre, precio, descripcion, imagen } = guitarra[0].attributes;
  return (
    <Layout title={`Guitarra ${nombre}`}>
      <div className={styles.guitarra}>
        <Image
          src={imagen.data.attributes.url}
          width={600}
          height={400}
          alt={`Imagen Guitarra ${nombre}`}
        />
        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>${precio}</p>

          <form htmlFor="cantidad" className={styles.formulario}>
            <label>Cantidad</label>
            <select id="cantidad">
              <option value="0">-- Seleccione --</option>
              {CANTIDAD_GUITARRAS?.map((cantidad) => (
                <option value={cantidad} key={cantidad}>
                  {cantidad}
                </option>
              ))}
            </select>
            <input type="submit" value="Agregar al carrito" />
          </form>
        </div>
      </div>
    </Layout>
  );
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
