function minimumBribes(q) {
  let bribes = 0;
  let chaotic = false;

  for (let i = 0; i < q.length; i++) {
    // Chequear si alguien se adelantó más de 2 posiciones
    if (q[i] - (i + 1) > 2) {
      chaotic = true;
      break;
    }

    // Contar cuántas personas mayores que q[i] están delante de ella
    // Solo necesitamos revisar desde max(0, q[i]-2) hasta i-1
    for (let j = Math.max(0, q[i] - 2); j < i; j++) {
      if (q[j] > q[i]) bribes++;
    }
  }

  if (chaotic) {
    console.log('Too chaotic');
  } else {
    console.log(bribes);
  }
}

// Ejemplos de prueba
minimumBribes([2, 1, 5, 3, 4]); // Output: 3
minimumBribes([2, 5, 1, 3, 4]); // Output: Too chaotic
