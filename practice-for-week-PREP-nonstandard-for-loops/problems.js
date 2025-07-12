function oddIndices(arr) {
  // Return an array containing all the odd indices in the array
  // Your code here
  let rarr = [];
  if (arr.length === 0) {
    return rarr;
  }

  for (let i = 1; i <= arr.length - 1; i = i + 2) {
    rarr.push(arr[i]);
  }
  return rarr;
}

function oddReverse(arr) {
  // Return an array containing all the odd indices starting from the end
  // Your code here
  let rarr = [];
  if (arr.length === 0) {
    return rarr;
  }
  let i = arr.length - 1;
  if (i % 2 === 0) {
    i -= 1;
  }

  for (; i >= 0; i -= 2) {
    rarr.push(arr[i]);
  }
  return rarr;
}

function secondPower(arr) {
  // Return an array containing all indices that are powers of 2
  // Your code here

  let marr = [];
  for (let i = 1; i < arr.length; i <<= 1) {
    marr.push(arr[i]);
  }
  return marr;
}

function nthPower(arr, n) {
  // Return an array containing all indices that are powers of n
  // Your code here

  let marr = [];
  if (arr.length === 0) {
    return marr;
  }

  for (let i = 1; i < arr.length; i = n * i) {
    marr.push(arr[i]);
  }
  return marr;
}

function firstHalf(arr) {
  // Return an array containing the first half of an array
  // Include middle index on odd length arr
  // Your code here
  let marr = [];
  if (arr.length % 2 === 0) {
    marr = arr.splice(0, arr.length / 2);
  } else {
    marr = arr.splice(0, arr.length / 2 + 1);
  }
  return marr;
}

function secondHalf(arr) {
  // Return an array containing the second half of an array
  // Exclude middle index on odd length arr
  // Your code here

  let marr = [];
  if (arr.length % 2 === 0) {
    marr = arr.splice(arr.length / 2);
  } else {
    marr = arr.splice(arr.length / 2 + 1);
  }
  return marr;
}

module.exports = {
  oddIndices,
  oddReverse,
  secondPower,
  nthPower,
  firstHalf,
  secondHalf,
};
