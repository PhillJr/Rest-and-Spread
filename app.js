function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}

// Refactored with rest operator

const filterOutOdds = (...nums) => nums.filter(num => num %2 === 0);


findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1

const findMin = (...nums) => Math.min(...nums);

mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

const mergeObjects = (...objects) => Object.assign({}, ...objects);

doubleAndReturnArgs(1,2,3) // [2,4,6]
doubleAndReturnArgs(3,4,5) // [6,8,10]

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(val => val * 2)];


/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    let index = Math.floor(Math.random() * items.length);
    return [...items.slice(0, index), ...items.slice(index + 1)]
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    return {...obj, [key]: val}
}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    return {...obj1, ...obj2};

}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    return {...obj, [key]: val}
}