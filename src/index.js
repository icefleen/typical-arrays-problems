
exports.min = function min (array) {
  if (!(array instanceof Array) || array.length === 0) return 0;
  
  let min_el = array[0];

  for (let i = 1; i < array.length; i++) if (array[i] < min_el) min_el = array[i];

  return min_el;
}

exports.max = function max (array) {
  if (!(array instanceof Array) || array.length === 0) return 0;
  
  let max_el = array[0];

  for (let i = 1; i < array.length; i++) if (array[i] > max_el) max_el = array[i];

  return max_el;
}

exports.avg = function avg (array) {
  if (!(array instanceof Array) || array.length === 0) return 0;

  let sum = 0;

  for (el of array) sum += el;

  return sum / array.length;
}
