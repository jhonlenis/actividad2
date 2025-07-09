let inversion = 100;
let dia = 1;

do {
  const adicional = (dia % 3 === 0) ? 10 : 5;
  const gananciaDia = 10 + adicional;
  inversion += gananciaDia;

  console.log(`Día ${dia}: Ganancia de $${gananciaDia}, Total: $${inversion}`);

  if (inversion > 200) {
    console.log("Inversión superó $200, deteniendo el proceso");
    break;
  }

  dia++;
} while (dia <= 14);

console.log(`Total final de la inversión: $${inversion}`);
