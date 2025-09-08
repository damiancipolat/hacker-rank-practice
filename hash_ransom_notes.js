function createHash(magazineChunks) {
  let wordMap = {};
  for (let word of magazineChunks) {
    if (wordMap[word]) {
      wordMap[word] = ++wordMap[word];
    } else {
      wordMap[word] = 1;
    }
  }

  return wordMap;
}

function checkMagazine(magazine, note) {
  const magazineChunks = magazine.split(' ');
  const noteChunks = note.split(' ');

  // Create the hash map for every word.
  let wordMap = createHash(magazineChunks);

  // Loop each word.
  for (let word of noteChunks) {
    if (wordMap[word] && wordMap[word] > 0) {
      wordMap[word] = --wordMap[word];
    } else {
      return 'no';
    }
  }
  return 'yes';
}

const magazine = 'two times three is not four';
const note = 'two times two is four';

const result = checkMagazine(magazine, note);
console.log('>', result);
