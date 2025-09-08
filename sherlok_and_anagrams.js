function sherlockAndAnagrams(s) {
  const map = new Map();
  let count = 0;

  // Generar todos los substrings
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      // Substring desde i hasta j (no incluido j)
      const sub = s.substring(i, j);
      const key = sub.split('').sort().join('');
      console.log('xx', i, j, sub, '-', key);

      if (map.get(key)) {
        count += map.get(key);
        map.set(key, map.get(key) + 1);
      } else {
        map.set(key, 1);
      }
    }
  }

  return count;
}

// 🔹 Ejemplos
console.log(sherlockAndAnagrams('abba')); // 4
console.log(sherlockAndAnagrams('abcd')); // 0
console.log(sherlockAndAnagrams('cdcd')); // 5
