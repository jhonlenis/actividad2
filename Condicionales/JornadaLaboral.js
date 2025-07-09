const tiempoTotal = 240;
let tiempoRestante = tiempoTotal;
let ciclo = 0;

for (let i = 0; i < tiempoTotal; i += 50) {
  ciclo++;

  if (ciclo % 2 !== 0) {
    // Ciclo de trabajo
    tiempoRestante -= 50;
    if (tiempoRestante < 0) tiempoRestante = 0;
    console.log(`Ciclo ${ciclo}: Trabajar 50 minutos, Tiempo restante: ${tiempoRestante} minutos`);
  } else {
    // Ciclo de pausa
    const pausaNumero = Math.ceil(ciclo / 2);
    const duracionPausa = pausaNumero <= 3 ? 10 : 20;
    tiempoRestante -= duracionPausa;
    if (tiempoRestante < 0) tiempoRestante = 0;
    console.log(`Ciclo ${ciclo}: Pausa de ${duracionPausa} minutos, Tiempo restante: ${tiempoRestante} minutos`);
  }

  if (tiempoRestante <= 0) {
    break;
  }
}
