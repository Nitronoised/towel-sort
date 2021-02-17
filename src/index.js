
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let array = [];
  if (!matrix || matrix.length === 0) { return [] }
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) { matrix[i].map(e => array.push(e)) }
    else { matrix[i].sort((a, b) => b - a).map(e => array.push(e)) }
  }
  return array
}
