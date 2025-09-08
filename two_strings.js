function twoStrings(a, b) {
  const chunkB = b.split('');

  for (let char of chunkB) {
    if (a.includes(char)) {
      return 'yes';
    }
  }
  return 'no';
}

console.log('1', twoStrings('hello', 'word')); // YES
console.log('2', twoStrings('hi', 'world')); // NO
