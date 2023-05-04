import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className="contenedor">
        <Link href="/" legacyBehavior>
          <a>
            <Image
              src="/img/logo.svg"
              width={300}
              height={40}
              alt={"Imagen logo"}
            />
          </a>
        </Link>
        <nav className={styles.navegacion}>
          <Link href="/">Inicio</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/tienda">Tienda</Link>
        </nav>
        <p>Todos los derechos reservados {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
