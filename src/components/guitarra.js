import React from "react";
import Image from "next/image";
import Link from "next/link";

const Guitarra = ({ guitarra }) => {
  const { nombre, precio, descripcion, imagen, url } = guitarra;
  return (
    <div>
      <Image
        src={imagen.data.attributes.formats.medium.url}
        width={600}
        height={400}
        alt={`Imagen Guitarra ${nombre}`}
      />
      <div>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <p>${precio}</p>
        <Link href={`/guitarras/${url}`}>Ver Producto</Link>
      </div>
    </div>
  );
};

export default Guitarra;
