import React from "react";
import Image from "next/image";
// import logo from "../../public/img/logo.svg";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="contenedor">
        <Image src="/img/logo.svg" width={300} height={40} />
      </div>
      <nav>
        <Link href="/">Inicio</Link>
        <Link href="/nosotros">Nosotros</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/tienda">Tienda</Link>
      </nav>
    </header>
  );
};

export default Header;
