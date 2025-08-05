export function analyzeArray(array) {
  const average =
    array.reduce((total, currentValue) => {
      return total + currentValue;
    }, 0) / array.length;
  array.sort();
  return {average, min: array[0], max: array[array.length - 1], length: array.length};
}
