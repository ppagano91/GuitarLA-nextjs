import Image from "next/image";
import Link from "next/link";
import React from "react";

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
      <div>
        <h3>{titulo}</h3>
        <p>{publishedAt}</p>
        <p>{contenido}</p>
        <Link href={`/blog/${url}`}>Ver Post</Link>
      </div>
    </article>
  );
};

export default Post;
