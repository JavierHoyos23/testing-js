
function substract(a,b) {
  return a - b;
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}

function max(array) {
  if (array.length === 0){
    return null;
  }
  return array.reduce((a, b) => a > b ? a : b);
}

module.exports = {substract, isEven, max};
