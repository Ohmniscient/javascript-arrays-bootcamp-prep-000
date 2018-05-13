var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningofArray(element, array) {
  array.unshift(element)
  return array
}


