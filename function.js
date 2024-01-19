function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: sum function expects numeric values');
  }

  return a + b;
}

function getElementAtIndex(arr, index) {
  if (index < 0 || index >= arr.length) {
    throw new Error("Index out of bounds");
  }
  return arr[index];
}

function removeElement(arr, element) {
  const index = arr.indexOf(element);

  if (index !== -1) {
    arr.splice(index, 1);
  }

  return arr;
}


module.exports = {sum, getElementAtIndex, removeElement};
