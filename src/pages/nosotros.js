import React from "react";
import Image from "next/image";
import Layout from "@/components/layout";
import styles from "@/styles/Nosotros.module.css";

const Nosotros = () => {
  return (
    <>
      <Layout
        title={"Nosotros"}
        description={"Sobre nosotros, GuitarLA, tienda de música"}
      >
        <main className="contenedor">
          <h2 className="heading">Nosotros</h2>
          <div className={styles.contenido}>
            <Image
              src="/img/nosotros.jpg"
              width={1000}
              height={800}
              alt="Imagen sobre Nosotros"
            ></Image>
            <div>
              <p className={styles.parrafo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus non erat mi. Nullam viverra rhoncus fermentum. Aenean
                lacinia felis quam, non euismod orci sagittis eu. Nunc congue
                congue est porta sodales. Maecenas nulla enim, venenatis sed
                consequat quis, efficitur nec purus. Quisque rhoncus faucibus
                dui id sagittis. Aliquam ex lacus, aliquet posuere erat in,
                venenatis aliquet augue.
              </p>
              <p className={styles.parrafo}>
                Aliquam cursus velit massa, ac ultricies nunc congue ut. Mauris
                accumsan sapien eget tincidunt laoreet. Donec vel quam at elit
                accumsan finibus at interdum quam. Fusce viverra orci urna, eget
                efficitur metus pharetra sit amet. Nam tincidunt dui eu
                fringilla accumsan. Maecenas dictum pellentesque gravida. Fusce
                tincidunt tincidunt lorem eu gravida. Donec at diam id risus
                malesuada iaculis.
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Nosotros;
