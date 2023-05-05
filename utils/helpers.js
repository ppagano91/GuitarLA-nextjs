export const formatearFecha = (fecha) => {
  const date = new Date(fecha);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("es-ES", options);
};
export const formatearPrecio = (precio) => {
  const formatter = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "USD",
  });
  return formatter.format(precio);
};
