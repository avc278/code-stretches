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
        }, []));
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
    // javascript is very nice and will convert numbers for us
    return str.split(',').reduce( (acc, value) => {
        return acc * value;
    }, 1);

    // const arr = str.split(',');
    // return arr.reduce((prod, el) => {
    //     // we cannot assume that all elements we convert to numbers will actually be numbers
    //     const intEl = parseInt(el, 10);
    //     // so we only multiply the product by the number casted element if it is a number and not NaN
    //     if ((typeof intEl === 'number') && (!Number.isNaN(intEl))) {
    //         return prod *= intEl;
    //     } else {
    //         return prod;
    //     }
    // }, 1);
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

const mostPopularLetter = (str) => {
    const counter = str.split('').reduce( (acc, letter) => {
        acc[letter] = acc[letter] || 0;
        acc[letter]++;
        return acc;
    }, {});

    let popularLetter = '';
    let popularLetterCount = 0;
    Object.keys(counter).map( (key) => {
        if (counter[key] > popularLetterCount) {
            popularLetterCount = counter[key];
            popularLetter = key;
        };
    });
    return popularLetter;
};

console.log(mostPopularLetter('foo'));
// o

console.log(mostPopularLetter('foobarbazbz'));
// b

console.log(mostPopularLetter(''));
// undefined

/* ------------------------------------------------------------------------------------------------------------------ */

const group = (arr, fn) => {
	return arr.reduce( (acc, el) => {
        let category = fn(el);
        acc[category] = acc[category] || [];
        acc[category].push(el);
        return acc;
    }, {});
};

let grouped = group([1, 2, 3], (i)=> i % 2 ? 'odd' : 'even');
console.log(grouped);
// { odd: [ 1, 3 ] , even: [ 2 ] }

grouped = group([1, 2, 3], (i)=> i >= 2 ? 'gte 2' : 'lt2');
console.log(grouped);
// { lt2: [ 1 ], 'gte 2': [ 2, 3 ] }

grouped = group(['a', 'b', 1, 2, 3],(i) => typeof i === 'number' ? 'numbers' : 'not numbers');
console.log(grouped);
// { 'not numbers': [ 'a', 'b' ], numbers: [ 1, 2, 3 ] }

/* ------------------------------------------------------------------------------------------------------------------ */

const groupByDataType = arr => {
    return arr.reduce( (output, el) => {
        output[typeof el] = output[typeof el] || [];
        output[typeof el].push(el);
        return output;
    }, {});
};
  
console.log(groupByDataType([1, 2, 3]));
// { number: [ 1, 2, 3 ] }

console.log(groupByDataType([1, 'a', 'b', true, false, [], new Date(), true, {}]));
/* { number: [ 1 ],
    string: [ 'a', 'b' ],
    boolean: [ true, false, true ],
    object: [ [], 2020-03-03T20:54:30.720Z, {} ] } */
// date will be current date!
  
/* ------------------------------------------------------------------------------------------------------------------ */

const size = (thing) => {
    if (Array.isArray(thing)) {
        return thing.length;
    } else {
        return Object.keys(thing).length;
    };
};

console.log(size([1, 2, 3, 4, 5]));
// 5

console.log(size({one: 1, two: 2, three: 3}));
// 3

console.log(size({one: 1, two: 2, three: 3, foo: 'bar'}));
// 4

/* ------------------------------------------------------------------------------------------------------------------ */

const partition = (arr, fn) => {
    return arr.reduce( (acc, el) => {
        if (fn(el)) {
            acc[0].push(el);
        } else {
            acc[1].push(el);
        };
        return acc;
    }, [ [], [] ]);
};

console.log(partition([1, 2, 3, 4], (x)=> x % 2 === 1));
// [ [ 1, 3 ], [ 2, 4 ] ]

console.log(partition([1, 2, 3, 4], (x)=> typeof x === 'string'));
// [ [], [ 1, 2, 3, 4 ] ]
console.log(partition([1, 'a', 'b', 2, 3, 4], (x)=> typeof x === 'string'));
// [ [ 'a', 'b' ], [ 1, 2, 3, 4 ] ]

/* ------------------------------------------------------------------------------------------------------------------ */

const pluck = (arr, key) => {
    return arr.reduce( (acc, obj) => {
		if (obj[key]) {
            acc.push(obj[key]);
        };
        return acc;
    }, []);
};

const stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
console.log(pluck(stooges, 'name'));
// [ 'moe', 'larry', 'curly' ]

/* ------------------------------------------------------------------------------------------------------------------ */

// receives an array and returns an object
// all array's are grouped with key array and everything else is grouped under other

const separate = (arr) => {
    return arr.reduce( (acc, el) => {
        Array.isArray(el) ? acc.arrays.push(el) : acc.other.push(el);
    	return acc;
    }, { arrays: [], other: [] });
};

console.log(separate([{},1, [1, 2], ['a'], {}]));
// { arrays: [ [ 1, 2 ], [ 'a' ] ], other: [ {}, 1, {} ] }

/* ------------------------------------------------------------------------------------------------------------------ */

// you can round up or down to the closest number of days
// a date in future should return a positive number
// a date in the past should return a negative number

const daysFromNow = (day) => {
	const today = new Date();
    const msInADay = 1000 * 60 * 60 * 24;
    const diff = Math.round((day - today) / msInADay);
    return diff;
}

console.log(daysFromNow(new Date('07/04/2020')));
// logs days from now

/* ------------------------------------------------------------------------------------------------------------------ */

// isMatch returns true if the first object has all the same keys and values of second object
// note the first object can have extra properties, yet still return true

const isMatch = (objA, objB) => {
    const entriesB = Object.entries(objB);
    for (let i=0; i<entriesB.length; i++) {
        const [ k, v ] = entriesB[i];
        if (objA[k] !== v) {
            return false;
        };
    };
    return true;
};

console.log(isMatch({}, {x: 1}));
// false

console.log(isMatch({x: 1, y: 2}, {x: 1}));
// true

console.log(isMatch({x: 1, y: 2, z: 3}, {x: 1, y: 2}));
// true

console.log(isMatch({x: 1, y: 2, z: 3}, {x: 1, y: 1}));
// false

/* ------------------------------------------------------------------------------------------------------------------ */

const letterCounter = str => {
    return str.split('').reduce( (acc, el) => {
        acc[el] = acc[el] || 0;
        acc[el]++;
        return acc;
    }, {});
};

console.log(letterCounter('abcdefhi a b c'));
// { a: 2, b: 2, c: 2, d: 1, e: 1, f: 1, h:1, i: 1, ' ': 3 }

/* ------------------------------------------------------------------------------------------------------------------ */

const uniqueConsonant = str => {
    return str.split('').reduce( (acc, curr) => {
        if (!acc.includes(curr) && !'aeiou'.includes(curr)) {
            acc.push(curr);
        };
        return acc;
    }, []);
};

console.log(uniqueConsonant('abacub'));
// [ 'b', 'c' ]

/* ------------------------------------------------------------------------------------------------------------------ */

const tempConvertor = (tempObj) => {
    const { degree, scale } = tempObj;
    const convertedTempObj = {};
    if (scale === 'F') {
        convertedTempObj.degree = ( (5/9) * ( degree - 32) );
        convertedTempObj.scale = 'C';
    } else if (scale === 'C') {
        convertedTempObj.degree = ( ( (9/5) * degree) + 32);
        convertedTempObj.scale = 'F';
    };
    return convertedTempObj;
};

console.log(tempConvertor({ degree: 32, scale: 'F'}));
// { degree: 0, scale: 'C' }

console.log(tempConvertor({ degree: 212, scale: 'F'}));
// { degree: 100, scale: 'C' }

console.log(tempConvertor({ degree: 0, scale: 'C'}));
// { degree: 32, scale: 'F' }

console.log(tempConvertor({ degree: 100, scale: 'C'}));
// { degree: 212, scale: 'F' }

/* ------------------------------------------------------------------------------------------------------------------ */

const tempConvertorErrorHandling = tempObj => {
    if (!['F', 'C'].includes(tempObj.scale) || typeof tempObj.degree !== 'number') {
        throw('scale must be F or C');
    };

    if (tempObj.scale === 'F') {
        const temp = (5/9) * (tempObj.degree - 32);
        return { degree: temp, scale: 'C' };
    } else if (tempObj.scale === 'C') {
        const temp = ( (9/5) * tempObj.degree ) + 32;
        return { degree: temp, scale: 'F' };
    };
};

console.log(tempConvertorErrorHandling({ degree: 32, scale: 'F'}));
// { degree: 0, scale: 'C' }

console.log(tempConvertorErrorHandling({ degree: 212, scale: 'F'}));
// { degree: 100, scale: 'C' }

console.log(tempConvertorErrorHandling({ degree: 0, scale: 'C'}));
// { degree: 32, scale: 'F' }

console.log(tempConvertorErrorHandling({ degree: 100, scale: 'C'}));
// { degree: 212, scale: 'F' }

try {
    console.log(tempConvertorErrorHandling({ degree: 100, scale: 'X'}));
}
catch(e){
    console.log(e);
}
// scale must be F or C

try {
    console.log(tempConvertorErrorHandling({ degree: '32', scale: 'F'}));
}
catch(e){
    console.log(e);
}
// scale must be F or C

/* ------------------------------------------------------------------------------------------------------------------ */

const rejectMeInCaps = str => {
    throw(str.toUpperCase());
}

rejectMeInCaps('foo')
  .catch( result => console.log(result));
// FOO

rejectMeInCaps('bar')
  .catch( result => console.log(result));
// BAR

/* ------------------------------------------------------------------------------------------------------------------ */

const resolveMeInUpperCase = str => {
    return new Promise( (res, rej) => {
        return res(str.toUpperCase());
    });
};

resolveMeInUpperCase('foo')
    .then( result => console.log(result));
// FOO

resolveMeInUpperCase('bar')
    .then( result => console.log(result));
// BAR

/* ------------------------------------------------------------------------------------------------------------------ */

const onlyEven = (num) => {
	return new Promise( (res, rej) => {
        if (num % 2 === 0) {
            res(num);
        } else {
            rej(num);  
        };
    });
};

onlyEven(2)
    .then(num=> console.log(`resolved with ${num}`));

onlyEven(3)
    .catch(num=> console.log(`rejected with ${num}`));
/*
resolved with 2
rejected with 3
*/

/* ------------------------------------------------------------------------------------------------------------------ */

const onlyNumbers = num => {
    return new Promise((res, rej) => {
    	if (typeof num === 'number') {
            res(num);
        } else {
            rej(num);
        }
    });
};

onlyNumbers(2)
    .then(num=> console.log(`resolved with ${num}`));

onlyNumbers('two')
    .catch(num=> console.log(`rejected with ${num}`));

onlyNumbers('3')
    .catch(num=> console.log(`rejected with ${num}`));
/*
resolved with 2
rejected with two
rejected with 3
*/

/* ------------------------------------------------------------------------------------------------------------------ */

let counter = 0;
const everyOther = () => {
    return new Promise( (res, rej) => {
        // pass on odd checks, and fail on even checks
        counter++;
        if (counter % 2 !== 0) {
            if (counter === 1) {
                res('yup');
            } else {
                res('yes again');
            };
        } else {
            if (counter === 2) {
                rej('nope');
            } else {
                rej('no again');
            }
        };
    });
};

everyOther()
    .then(()=> console.log('yup'));
everyOther()
    .catch(()=> console.log('nope'));
everyOther()
    .then(()=> console.log('yes again'));
everyOther()
    .catch(()=> console.log('no again'));
/*
yup
nope
yes again
no again
*/

/* ------------------------------------------------------------------------------------------------------------------ */

const everyNTimes = num => {
    let counter = 0;
    return function(str) {
        counter++;
        return new Promise( (res, rej) => {
            if (counter % num === 0) {
                res(str);
            } else {
                rej(str);
            };
        });
    };
};

const everyOther = everyNTimes(2);
everyOther('a').catch(r => console.log(`NO ${r}`));
everyOther('b').then(r => console.log(`YES ${r}`));
everyOther('c').catch(r => console.log(`NO ${r}`));
everyOther('d').then(r => console.log(`YES ${r}`));

const everyThree = everyNTimes(3);
everyThree('1').catch(r => console.log(`NO ${r}`));
everyThree('2').catch(r => console.log(`NO ${r}`));
everyThree('3').then(r => console.log(`YES ${r}`));
everyThree('4').catch(r => console.log(`NO ${r}`));
everyThree('5').catch(r => console.log(`NO ${r}`));
everyThree('6').then(r => console.log(`YES ${r}`));
/*
NO a
YES b
NO c
YES d
NO 1
NO 2
YES 3
NO 4
NO 5
YES 6
*/

/* ------------------------------------------------------------------------------------------------------------------ */

const delayInSeconds = (s, str) => {
    const ms = s * 1000;
    return new Promise( (res, rej) => {
        setTimeout( () => res(str), ms)
    });
};

const now = new Date();
const elapsed = ()=> {
    console.log(`${ (new Date() - now) /1000} elapsed seconds`);
};
delayInSeconds(.6, 'second')
    .then( d => {
        console.log(d)
        elapsed();
    });

delayInSeconds(.7, 'third')
    .then( d => {
        console.log(d)
        elapsed();
    });

delayInSeconds(.5, 'first')
    .then( d => {
        console.log(d)
        elapsed();
    });

// times might differ slightly
/*
first
.503 elapsed seconds
second
.601 elapsed seconds
third
.706 elapsed seconds
*/

/* ------------------------------------------------------------------------------------------------------------------ */

const onlyNumbers = input => {
    return new Promise( (res, rej) => {
        if (typeof (input) === "number") {
            res(input);
        } else {
            rej(input);
        };
    });
};

onlyNumbers(2)
    .then(num=> console.log(`resolved with ${num}`));
onlyNumbers('two')
    .catch(num=> console.log(`rejected with ${num}`));
onlyNumbers('3')
    .catch(num=> console.log(`rejected with ${num}`));
/*
resolved with 2
rejected with two
rejected with 3
*/

/* ------------------------------------------------------------------------------------------------------------------ */

class Notifier {
    constructor() {
        this.listeners = [];
    };
    listen(fn) {
        this.listeners.push(fn);
    };
    broadcast(message) {
        this.listeners.forEach(listener => listener(message));
    };
};

const n = new Notifier();
n.listen((message)=> console.log(message.toUpperCase()));
n.broadcast('hello');
n.broadcast('world');
n.listen((message)=> console.log(message.toLowerCase()));
n.broadcast('hello again!');
/*
HELLO
WORLD
HELLO AGAIN!
hello again!
*/

/* ------------------------------------------------------------------------------------------------------------------ */
