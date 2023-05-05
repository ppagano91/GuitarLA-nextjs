import Image from "next/image";
import Link from "next/link";
import React from "react";
import { formatearFecha } from "../../utils/helpers";

import styles from "@/styles/Blog.module.css";

const Post = ({ post }) => {
  const { titulo, contenido, imagen, url, publishedAt } = post;
  return (
    <article>
      <Image
        src={imagen.data.attributes.formats.medium.url}
        width={600}
        height={400}
        alt={`Imagen Post ${titulo}`}
      />
      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.resumen}>{contenido}</p>
        <Link href={`/blog/${url}`} legacyBehavior>
          <a className={styles.enlace}>Ver Post</a>
        </Link>
      </div>
    </article>
  );
};

export default Post;
