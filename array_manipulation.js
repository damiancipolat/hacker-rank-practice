function arrayManipulation(n, queries) {
  // Creamos un array de n elementos inicializados en 0
  let arr = new Array(n).fill(0);

  // Aplicamos cada query
  for (let [a, b, k] of queries) {
    for (let i = a - 1; i < b; i++) {
      arr[i] += k;
    }
  }

  // Devolvemos el máximo
  return Math.max(...arr);
}

// Ejemplo
const n = 5;
const queries = [
  [1, 2, 100],
  [2, 5, 100],
  [3, 4, 100],
];

console.log(arrayManipulation(n, queries)); // 👉 200
