let costoTotal = 0;

for (let dia = 1; dia <= 5; dia++) {
  const consumo = Math.floor(Math.random() * 10) + 1;
  const costoDiario = consumo > 5 ? 3 : 1.5;
  costoTotal += costoDiario;

  console.log(`Día ${dia}: Consumo ${consumo} kWh, Costo: $${costoDiario.toFixed(2)}, Total: $${costoTotal.toFixed(2)}`);

  if (costoTotal > 12) {
    console.log("Costo total superó $12, deteniendo el monitoreo");
    break;
  }
}

console.log(`Costo total final: $${costoTotal.toFixed(2)}`);
