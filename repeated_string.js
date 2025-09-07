function repeatArray(arr, n) {
  return Array(n).fill(arr).flat().join('');
}

function repeatedString(n, chain) {
  const repeated = repeatArray(chain, n);
  const sliced = repeated.slice(0, n);

  const total = sliced.split('').filter((char) => char === 'a').length;
  return total;
}

const result = repeatedString(10, 'aba');
console.log('>', result);
