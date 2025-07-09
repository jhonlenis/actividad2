let tiempo = 0;
const limite = 30;
let costo = 0;

if (tiempo === 0) {
  console.log("Error: El tiempo no puede ser cero");
} else {
  while (tiempo < limite) {
    tiempo += 5;

    if (tiempo <= 15) {
      costo += 5 * 0.5;
    } else {
      costo += 5 * 0.3;
    }

    console.log(`Tiempo: ${tiempo} minutos, Costo: $${costo.toFixed(2)}`);
  }
  console.log(`Costo total de la entrega: $${costo.toFixed(2)}`);
}