const jumpingOnClouds = (c) => {
  let jumps = 0;
  let i = 0;

  while (i < c.length - 1) {
    const j1 = c[i + 1] === 0;
    const j2 = c[i + 2] === 0;

    if (j2) {
      i = i + 2;
    }

    if (j1) {
      i = i + 1;
    }

    if (j1 || j2) {
      jumps++;
    }
    console.log('step', i, 'cloud', c[i], 'scan', j1, j2);
  }

  return jumps;
};

const result = jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]);
console.log('result', result);
