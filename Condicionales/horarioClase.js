let dia = 6; // Cambia este valor del 1 al 7 para probar otros días
let horario;
let intento = 0;
const maxIntentos = 4;

// Asignar horario base
switch (dia) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    horario = 9;
    break;
  case 6:
    horario = 11;
    break;
  case 7:
    horario = 16;
    break;
  default:
    horario = 0;
}

console.log(`Horario base para día ${dia}: ${horario}:00`);

while (intento < maxIntentos) {
  // Simula necesidad de ajuste: true para primeros 3 intentos, false después
  const ajustar = intento < 3;

  if (!ajustar) {
    break;
  }

  intento++;
  horario -= 1;
  console.log(`Intento ${intento}: Ajustando a ${horario}:00`);
}

if (horario < 7) {
  console.log("Error: Horario demasiado temprano");
} else {
  console.log(`Horario final para la clase: ${horario}:00`);
}
