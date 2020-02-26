// CODE STRETCHES
/* ------------------------------------------------------------------------------------------------------------------ */

// Write a function called invert.
// This function takes in an obj, and returns an object whose key/value pairs are swapped.

const invert = (obj) => {
    return Object.entries(obj).reduce((accumulator, entry) => {
        accumulator[entry[1]] = `${entry[0]}`;
        return accumulator;
    }, {});
}

invert({x: 'foo', y: 3})
// {3: 'y', foo: 'x'}

invert({hello: 'world', bazz: 19})
// {19: 'bazz', world: 'hello'}

/* ------------------------------------------------------------------------------------------------------------------ */

// Write a function called sumValues.
// This function should sum all of the numeric values of an object.

const sumValues = (obj) => {
    return Object.entries(obj).reduce((accumulator, entry) => {
      if (typeof entry[1] === 'Number') {
          accumulator += entry[1];
      }
      return accumulator;
    }, 0);
};

console.log(sumValues({ foo: 1, bar: 2, bazz: 'whatever'}));
// 3

console.log(sumValues({}));
// 0

/* ------------------------------------------------------------------------------------------------------------------ */

// Write a function, intersect, that takes in two arrays,
// and returns an array populated by elements that are in both input arrays.

const intersect = (a, b) => {
    return a.filter( x => b.includes(x));
}

const x = [1, 2, 3];
const y = [2, 3, 4, 5];
console.log(intersect(x, y))
// [2, 3]

// Bonus: perhaps a future implementation of intersectMany could be performing intersect
// on n arrays instead of just 2.

/* ------------------------------------------------------------------------------------------------------------------ */

// isMatch takes two objects.
// If the first object has all the properties of the second object return true,
// otherwise return false.

const isMatch = (target, matcher) => {
    const entries = Object.entries(matcher);
    for (let i=0; i < entries.length; i++) {
        const [key, value] = entries[i];
        if (target[key] !== value) {
            return false;
        }
    }
    return true;
}

isMatch({ foo: true, bar: 1}, { foo: true });
// true

isMatch({ foo: 42, bazz: 19}, {});
// true

isMatch({ foo: 42, bazz: 11}, { foo: 43 });
// false

isMatch({ }, { foo: 11 });
// false

/* ------------------------------------------------------------------------------------------------------------------ */

// multiMult is a function that takes any number of arguments and returns a function.
// The returned function takes a number,
// and returns the product of that number and the arguments passed in to multiMult.

const multiMult = (...args) => {  
    return (num) => {
        return args.reduce((acc, item) => {
            acc = acc * item;
            return accumulator;
        }, num);
    };
};

const m5 = multiMult(5);
console.log(m5(4));
// 20

const m5_6 = multiMult(5, 6);
console.log(m5_6(3));
// 90

/* ------------------------------------------------------------------------------------------------------------------ */

// timer is a function that takes a number in seconds, and returns a function.
// The returned function performs a delayed action by the number of seconds initially passed in.

const timer = (delay) => {
    return (fn) => {
        setTimeout(fn, delay * 1000);
    }
}

const t1= timer(2);
t1(() => console.log('2 sec'));
// This appears on the screen 2 seconds after called.

t1(() => console.log('2 sec'));
// This appears on the screen 2 seconds after called.

const t2 = timer(.5);
t2(() => console.log('.5 sec'));
// This appears on the screen 0.5 seconds after called.

const t3 = timer(0);
t3(() => console.log('0 sec'));
// This appears on the screen 0 seconds after called.

/* ------------------------------------------------------------------------------------------------------------------ */

// get passed an array and an object
// filter objects in array that have all the properties of the second argument
// note: an object can have extra properties

const fuzzyFilter = (arr, filter) => {
    const isMatch = (item, filter) => {
        const entries = Object.entries(filter);
        let match = true;
        entries.forEach(entry => {
            const [key, value] = entry;
            if (item[key] != value) {
                match = false;
            };
        });
        return match;
    };

    return arr.filter( item => {
        isMatch(item, filter)
    });
};

console.log(fuzzyFilter([ { foo: 'bar', x: 3},
                          { foo: 'bar'},
                          { foo: 'ba', y: 1} ],
                        { foo: 'bar' }));
// [ { foo: 'bar', x: 3 }, { foo: 'bar' } ]

console.log(fuzzyFilter([ { foo: 'bar', x: 3},
                          { foo: 'bar'},
                          { foo: 'bar', y: 1} ],
                        { foo: 'ba' }));
// []

/* ------------------------------------------------------------------------------------------------------------------ */

// write the fill function
// takes two arguments
// first determines length of returned array
// second takes the value the array should be filled with
// note the behavior where the 2nd parameter is an object

const fill = (count, value) => {
    // we're pushing in the same object each iteration
    // which works for a1, and a2, but not for a3
    // return Array(count).fill(value);
    const results = [];
    while (results.length < count) {
        // by using the spread operator, we create an entirely
        // new object instead of pointing to the same object
        results.push(typeof value === 'object' ? {...value} : value);
    }
    return results;
}

const a1 = fill(3, true);
console.log(a1);
// [true, true, true]

const a2 = fill(4,42)
console.log(a2);
// [42, 42, 42]

const x = {foo: 'bar'}
const a3 = fill(2, x);
console.log(a3[0] === a3[1])
// false

/* ------------------------------------------------------------------------------------------------------------------ */

// randomList is passed an array and a count
// it returns an array of values chosen randomly from list with no duplicates

const randomList = (list, count) => {
    const ret = [];
    while (ret.length < count) {
        const idx = Math.floor(Math.random()) * list.length;
        const item = list[idx];
        if (!ret.includes(item)) {
            ret.push(item);
        }
    }
    return ret;
}

console.log(randomList([1,2,3], 2));
// random choice of two like [1,2] [3,1] [2,1]

console.log(randomList(['foo', 'bar', 'bazz', 'quq'], 2));
// random choice of two

/* ------------------------------------------------------------------------------------------------------------------ */

// getVowels takes in a string and returns a non-repeating array of the vowels in the string

const getVowels = (word) => {
    return Object.keys(word.split('')
        .reduce((acc, ltr) => {
            if ('aeiou'.includes(ltr)) {
                acc[ltr] = true;
            }
            return acc;
        }, {}));
}

console.log(getVowels('Fullstack Academy'))
// ['u', 'a', 'e']

/* ------------------------------------------------------------------------------------------------------------------ */

// processor takes in parentList, childList, listName, primaryKey, foreignKey
// processor iterates through the parentList and adds listName as a key to each object in the parentList
// listName will have an array as its value populated by objects
// from the childList whose foreignKey matches the primaryKey from parentList

const processor = (parentList, childList, listName, primaryKey, foreignKey) => {
    return parentList.map( parentItem => {
        const list = childList.filter(childItem => {
            return childItem[foreignKey] === parentItem[primaryKey]
        });
        // we "splat" the parentItem 
        return {...parentItem, [listName]: list};
    })
}

const users = [
    { id: 'x', name: 'Moe' },
    { id: 'y', name: 'Larry' },
]

const things = [
    { id: 'a', userId: 'x', name: 'foo'},
    { id: 'b', userId: 'x', name: 'bar'},
    { id: 'c', userId: 'y', name: 'bazz'},
];

const processed = processor(users, things, 'things', 'id', 'userId');
console.log(JSON.stringify(processed, null, 2));
// "[
//     {
//       "id": "x",
//       "name": "Moe",
//       "things": [
//         {
//           "id": "a",
//           "userId": "x",
//           "name": "foo"
//         },
//         {
//           "id": "b",
//           "userId": "x",
//           "name": "bar"
//         }
//       ]
//     },
//     {
//       "id": "y",
//       "name": "Larry",
//       "things": [
//         {
//           "id": "c",
//           "userId": "y",
//           "name": "bazz"
//         }
//       ]
//     }
//   ]"

/* ------------------------------------------------------------------------------------------------------------------ */

// objFromArray takes in an array and returns an object,
// where the returned object is populated with keys from the odd elements in the array
// and values from the even elements in the array

const objFromArray = (arr) => {
    return arr.reduce((acc, value, idx) => {
        if (idx % 2 === 0) {
            acc[value] = arr[idx + 1];
        }
        return acc;
    }, {});
};

console.log(objFromArray(['foo', 2, 'bar', 4]))
// { foo: 2, bar: 4 }

console.log(objFromArray([1, 2, 3, 4, 5, 6]))
// { '1': 2, '3': 4, '5': 6 }

/* ------------------------------------------------------------------------------------------------------------------ */

// it removes the odd values from an array and returns the number of items it removed.

// WRONG SOLUTION. WE NEED TO MAKE THIS AN IMPURE FUNCTION
const removeOdd = (input) => {
    let count = 0;
    const arr = input.filter( (input, index, arr) => {
        if (el % 2 === 0) {
            return el;
        } else count++;
    })
    return count;
}

const arr = [1, 3, 5, 8, 10, 41];

console.log(removeOdd(arr));
// 4

console.log(arr);
// [8, 10]

/* ------------------------------------------------------------------------------------------------------------------ */

// returns true if one of the values in the object contains the passed in string
// Search is case insensitive
// returns false otherwise

const objContainsString = (obj, target) => {
    // since we are case insensitive, lowercase the target and
    // lowercase the values when we reach them
  target = target.toLowerCase()
    const values = Object.values(obj)
  for (let i=0; i<values.length; i++) {
      if (values[i].toLowerCase().includes(target)) {
          return true;
      }
  }
    return false;
}

console.log(objContainsString({ x: 'Foo', b: 'bare' }, 'foo'));
// true

console.log(objContainsString({ x: 'Foo', b: 'bare' }, 'bar'));
// true

console.log(objContainsString({ one: 'Foo', two: 'bare' }, 'bazz'));
// false

console.log(objContainsString({ }, 'whatever'));
// false

/* ------------------------------------------------------------------------------------------------------------------ */

// A function that groups items in an array

const group = (arr, key) => {
	return arr.reduce((acc, obj) => {
        if (acc[obj[key]] === undefined) {
            acc[obj[key]] = [obj];
            return acc;
        } else {
            acc[obj[key]] = [...acc[obj[key]], obj];
            return acc;
        }
    }, {});
}

const data = [
    {
      name: 'foo',
      id: 7
    },
    {
      name: 'foo',
      id: 8
    },
    {
      name: 'bar',
      id: 8
    }
  ];

console.log(group(data, 'name'));
/*
{ foo: [ { name: 'foo', id: 7 }, { name:'foo', id: 8 } ],
bar: [ { name: 'bar', id: 8 } ] }
*/

console.log(group(data, 'id'));
/*
{ '7': [ { name: 'foo', id: 7 } ],
'8': [ { name: 'foo', id: 8 }, { name:'bar', id: 8 } ] }
*/

/* ------------------------------------------------------------------------------------------------------------------ */

// Creates an array of grouped elements
// the first of which contains the first elements of the given arrays,
// the second of which contains the second elements of the given arrays, and so on.
// accepts any number of arrays

const zip = (...arr) => {
    const results = [];
    arr.forEach( list => {
        list.forEach((item, idx) => {
            results[idx] = results[idx] || [];
            results[idx].push(item);
        });
    });
    return results;
};

console.log(zip(['a', 'b'], [1, 2], [true, false]))
// => [['a', 1, true], ['b', 2, false]]

console.log(zip([]))
// => []

/* ------------------------------------------------------------------------------------------------------------------ */

// will return an array, length determined by passed in value
// array starts at one and each value increments by one,
// however, if the number is divisible by 3 and 5 replace number with FIZZBUZZ
// if number is divisible by 3 return FIZZ
// if number is divisible by 5 return BUZZ

const fizzBuzz = (num) => {
    const output = [];
    for (let i=1; i<num + 1; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
        	output.push('FIZZBUZZ')
        } else if (i % 3 === 0) {
            output.push('FIZZ')
        } else if (i % 5 === 0) {
            output.push('BUZZ')
        } else {
            output.push(i)
        }
    }
    return output;
}

console.log(fizzBuzz(15));
/*
[ 1,
  2, 
  'FIZZ',
  4, 
  'BUZZ',
  'FIZZ',
  7,
  8,
  'FIZZ',
  'BUZZ',
  11,
  'FIZZ',
  13,
  14,
  'FIZZBUZZ' ]
*/

/* ------------------------------------------------------------------------------------------------------------------ */

// Creates an object composed of the picked object properties.

const pick = (obj, keys) => {
    return keys.reduce( (acc, key) => {
        acc[key] = obj[key];
        return acc;
    }, {});
    
    // const output = {};
    // arr.forEach( el => {
    //     if (obj[el] !== undefined) {
    //         output[el] = obj[el];
    //     } else {
    //         output[el] = undefined;
    //     }
    // });
    // return output;
}

var object = { 'a': 1, 'b': '2', 'c': 3 };

pick(object, ['a', 'c'])
// => { 'a': 1, 'c': 3 }

pick(object, ['d']);
// => { d: undefined}

/* ------------------------------------------------------------------------------------------------------------------ */

const average = (arr, key) => {
    let counter = 0;
    const total = arr.reduce((acc, obj) => {
        // we should not assume that each obj in the array has the key
        // and we should not assume that each value is a number should the object have the key
        if (obj[key] !== undefined && typeof obj[key] === 'number') {
            counter++;
            return acc + obj[key];
        }
        return acc;
    }, 0);
    return total / counter;
};

const testScores = [
    { id: 1, score: 80 },
    { id: 2, score: 90 },
    { id: 3, score: 100 }
];
average(testScores, 'score');
// 90

const otherTestScores = [
    { id: 1, total: 80 },
    { id: 2, total: 60 },
    { id: 3, total: 100 }
];
average(otherTestScores, 'total');
// 80

/* ------------------------------------------------------------------------------------------------------------------ */

const multString = (str) => {
    const arr = str.split(',');
    return arr.reduce((prod, el) => {
        // we cannot assume that all elements we convert to numbers will actually be numbers
        const intEl = parseInt(el, 10);
        // so we only multiply the product by the number casted element if it is a number and not NaN
        if ((typeof intEl === 'number') && (!Number.isNaN(intEl))) {
            return prod *= intEl;
        } else {
            return prod;
        }
    }, 1);
};

console.log(multString('2, 5, 3'));
// 30

console.log(multString('2, 2, 2'));
// 8

// Bonus
console.log(multString('yo, hi, 3'));
//3

/* ------------------------------------------------------------------------------------------------------------------ */

// passed in string, counts occurences of each letter

const letters = 'abcdefghijklmnopqrstuvwxyz';
const letterCounter = str => {
    return str.split('').reduce( (acc, letter) => {
        acc[letter] = acc[letter] || 0;
        acc[letter]++;
        return acc;
    }, {})

    // return str.split('').reduce( (freq, letter) => {
    //     // we only want to add to the frequency object if we reach a letter
    //     if (letters.includes(letter)) {
    //         if (freq[letter] === undefined) {
    //             freq[letter] = 1;
    //         } else {
    //             freq[letter]++;
    //         };
    //     };
    //     return freq;
    // }, {});
};

console.log(letterCounter('abc'));
// { a: 1, b: 1, c: 1 }

console.log(letterCounter('foobarbazz'));
// { f: 1, o: 2, b: 2, a: 2, r: 1, z: 2 }

// Bonus
console.log(letterCounter('123'));
// {}

/* ------------------------------------------------------------------------------------------------------------------ */

const delay = (ms, str) => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(str)
        }, ms);
    });
};

const delayFail = (ms, str) => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            reject(str);
        }, ms);
    });
};

delay(500, 'foo')
  .then((result) => console.log(result));
// logs foo in half a second

delayFail(1000, 'bar')
  .catch( ex => console.log(ex));
// logs bar in a second


/* ------------------------------------------------------------------------------------------------------------------ */

// you cannot use the array reduce method within reduce

const reduce = (arr, func, start) => {
    let returnValue = start;
    arr.forEach( val => {
        returnValue = func(returnValue, val)
    });
    return returnValue;
};

console.log(reduce([1, 2, 3], (acc, item)=> {
    return item * acc;
}, 2));
// 12

console.log(reduce([1, 2, 3, 4], (acc, item)=> {
    return item * acc;
}, 10));
// 240

/* ------------------------------------------------------------------------------------------------------------------ */
