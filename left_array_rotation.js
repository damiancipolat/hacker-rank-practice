function rotate(list) {
  return [...list.slice(1, list.length), list[0]];
}

function leftRotate(n, array) {
  let final = array;
  for (let i = 0; i <= n - 1; i++) {
    final = rotate(final);
  }

  return final;
}

const result = leftRotate(4, [1, 2, 3, 4, 5]);
console.log('result', result);
