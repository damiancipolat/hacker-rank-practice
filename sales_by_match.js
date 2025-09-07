const socks = [1, 2, 1, 2, 1, 3, 2];

const orders = socks.sort((a, b) => (a < b ? -1 : 1));
const uniques = [...new Set(orders)];

console.log('>>', uniques.length, '<<');
