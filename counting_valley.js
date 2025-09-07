const countingValleys = (steps, path) => {
  const sliced = path.slice(0, steps);
  let level = 0;
  let valeys = 0;

  for (let i = 0; i <= sliced.length - 1; i++) {
    const step = sliced[i];

    if (step === 'U') {
      level++;
    } else {
      level--;
    }

    if (level === 0 && step === 'U') {
      valeys++;
    }
  }
  return valeys;
};

const result = countingValleys(8, 'UDDDUDUUDDUU');
console.log('result', result);
