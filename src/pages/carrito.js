import React from "react";
import { useState, useEffect } from "react";

import Layout from "@/components/layout";
import Image from "next/image";

import styles from "@/styles/Carrito.module.css";

const CANTIDAD_GUITARRAS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Carrito = ({ carrito, actualizarCantidad, eliminarProducto }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculoTotal = carrito.reduce(
      (total, producto) => total + producto.precio * producto.cantidad,
      0
    );
    setTotal(calculoTotal);
  }, [carrito]);

  return (
    <Layout title="Carrito de Compras">
      <main className="contenedor">
        <h1 className="heading">Carrito</h1>
        <div className={styles.contenido}>
          <div className={styles.carrito}>
            <h2>Articulos</h2>
            {carrito.length === 0 ? (
              <p>No hay articulos en el carrito</p>
            ) : (
              carrito.map((producto) => (
                <div key={producto.id} className={styles.producto}>
                  <div>
                    <Image
                      width={250}
                      height={480}
                      src={producto.imagen}
                      alt={producto.nombre}
                    />
                  </div>

                  <div>
                    <p className={styles.nombre}>{producto.nombre}</p>
                    <div className={styles.cantidad}>
                      <p>Cantidad:</p>
                      <select
                        id="cantidad"
                        className={styles.select}
                        value={producto.cantidad}
                        onChange={(e) =>
                          actualizarCantidad({
                            id: producto.id,
                            cantidad: parseInt(e.target.value),
                          })
                        }
                      >
                        {CANTIDAD_GUITARRAS?.map((cantidad) => (
                          <option value={cantidad} key={cantidad}>
                            {cantidad}
                          </option>
                        ))}
                      </select>
                    </div>
                    <p className={styles.precio}>
                      Precio Unidad: <span>${producto.precio}</span>
                    </p>
                    <p className={styles.subtotal}>
                      Subtotal:{""}
                      <span>${producto.cantidad * producto.precio}</span>
                    </p>
                  </div>

                  <button
                    className={styles.eliminar}
                    type="button"
                    onClick={() => eliminarProducto(producto.id)}
                  >
                    X
                  </button>
                </div>
              ))
            )}
          </div>
          <aside className={styles.resumen}>
            <h3>Resumen del Pedido</h3>
            <p>Total a pagar: ${total}</p>
          </aside>
        </div>
      </main>
    </Layout>
  );
};

export default Carrito;
