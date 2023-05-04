import React from "react";
import Image from "next/image";
import logo from "../../public/img/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="contenedor">
        <Image src={logo.src} width={300} height={40} />
      </div>
    </header>
  );
};

export default Header;
