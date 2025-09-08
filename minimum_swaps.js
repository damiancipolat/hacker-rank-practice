function minimumSwaps(arr) {
  let swaps = 0;
  let i = 0;

  while (i < arr.length) {
    if (arr[i] !== i + 1) {
      let correctPos = arr[i] - 1;
      console.log('i', i, 'pos', arr[i], 'to', correctPos);
      [arr[i], arr[correctPos]] = [arr[correctPos], arr[i]];
      swaps++;
    } else {
      i++;
    }
  }

  return swaps;
}

const arr = [7, 1, 3, 2, 4, 5, 6];
console.log('>sin orden>', arr);
const result = minimumSwaps(arr);
console.log('>', result, 'list', arr);
