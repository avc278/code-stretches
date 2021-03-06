// CODE STRETCHES
/* ------------------------------------------------------------------------------------------------------------------ */

// Write a function called invert.
// This function takes in an obj, and returns an object whose key/value pairs are swapped.

const invert = () => {

}

invert({x: 'foo', y: 3})
// {3: 'y', foo: 'x'}

invert({hello: 'world', bazz: 19})
// {19: 'bazz', world: 'hello'}

/* ------------------------------------------------------------------------------------------------------------------ */

// Write a function called sumValues.
// This function should sum all of the numeric values of an object.

const sumValues = () => {

};

console.log(sumValues({ foo: 1, bar: 2, bazz: 'whatever'}));
// 3

console.log(sumValues({}));
// 0

/* ------------------------------------------------------------------------------------------------------------------ */

// Write a function, intersect, that takes in two arrays,
// and returns an array populated by elements that are in both input arrays.

const intersect = () => {

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

const isMatch = () => {

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

const multiMult = () => {  

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

const timer = () => {

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

const fuzzyFilter = () => {

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

const fill = () => {

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

const randomList = () => {

}

console.log(randomList([1,2,3], 2));
// random choice of two like [1,2] [3,1] [2,1]

console.log(randomList(['foo', 'bar', 'bazz', 'quq'], 2));
// random choice of two

/* ------------------------------------------------------------------------------------------------------------------ */

// getVowels takes in a string and returns a non-repeating array of the vowels in the string

const getVowels = () => {

}

console.log(getVowels('Fullstack Academy'))
// ['u', 'a', 'e']

/* ------------------------------------------------------------------------------------------------------------------ */

// processor takes in parentList, childList, listName, primaryKey, foreignKey
// processor iterates through the parentList and adds listName as a key to each object in the parentList
// listName will have an array as its value populated by objects
// from the childList whose foreignKey matches the primaryKey from parentList

const processor = (parentList, childList, listName, primaryKey, foreignKey) => {

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

const objFromArray = () => {
};

console.log(objFromArray(['foo', 2, 'bar', 4]))
// { foo: 2, bar: 4 }

console.log(objFromArray([1, 2, 3, 4, 5, 6]))
// { '1': 2, '3': 4, '5': 6 }

/* ------------------------------------------------------------------------------------------------------------------ */

// it removes the odd values from an array and returns the number of items it removed.

const removeOdd = () => {

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

const objContainsString = () => {

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

const group = () => {

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

function zip() {

}

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

const fizzBuzz = () => {

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

const pick = () => {

}

var object = { 'a': 1, 'b': '2', 'c': 3 };

pick(object, ['a', 'c'])
// => { 'a': 1, 'c': 3 }

pick(object, ['d']);
// => { d: undefined}

/* ------------------------------------------------------------------------------------------------------------------ */

const average = () => {
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

const multString = () => {

}

console.log(multString('2, 5, 3'));
// 30

console.log(multString('2, 2, 2'));
// 8

// Bonus
console.log(multString('yo, hi, 3'));
//3

/* ------------------------------------------------------------------------------------------------------------------ */

// passed in string, counts occurences of each letter

const letterCounter = () => {

}

console.log(letterCounter('abc'));
// { a: 1, b: 1, c: 1 }

console.log(letterCounter('foobarbazz'));
// { f: 1, o: 2, b: 2, a: 2, r: 1, z: 2 }

// Bonus
console.log(letterCounter('123'));
// {}

/* ------------------------------------------------------------------------------------------------------------------ */

const delay = () => {

}

delay(500, 'foo')
  .then((result) => console.log(result));
// logs foo in half a second

/* ------------------------------------------------------------------------------------------------------------------ */

// you cannot use the array reduce method within reduce

const reduce = () => {

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

const mostPopularLetter = () => {

};

console.log(mostPopularLetter('foo'));
// o

console.log(mostPopularLetter('foobarbazbz'));
// b

console.log(mostPopularLetter(''));
// undefined

/* ------------------------------------------------------------------------------------------------------------------ */

const group = () => {

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

const groupByDataType = () => {

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

const size = () => {

};

console.log(size([1, 2, 3, 4, 5]));
// 5

console.log(size({one: 1, two: 2, three: 3}));
// 3

console.log(size({one: 1, two: 2, three: 3, foo: 'bar'}));
// 4

/* ------------------------------------------------------------------------------------------------------------------ */

const partition = () => {

};

console.log(partition([1, 2, 3, 4], (x)=> x % 2 === 1));
// [ [ 1, 3 ], [ 2, 4 ] ]

console.log(partition([1, 2, 3, 4], (x)=> typeof x === 'string'));
// [ [], [ 1, 2, 3, 4 ] ]
console.log(partition([1, 'a', 'b', 2, 3, 4], (x)=> typeof x === 'string'));
// [ [ 'a', 'b' ], [ 1, 2, 3, 4 ] ]

/* ------------------------------------------------------------------------------------------------------------------ */

const pluck = () => {

};

const stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
console.log(pluck(stooges, 'name'));
// [ 'moe', 'larry', 'curly' ]

/* ------------------------------------------------------------------------------------------------------------------ */

// receives an array and returns an object
// all array's are grouped with key array and everything else is grouped under other

const separate = () => {

};

console.log(separate([{},1, [1, 2], ['a'], {}]));
// { arrays: [ [ 1, 2 ], [ 'a' ] ], other: [ {}, 1, {} ] }

/* ------------------------------------------------------------------------------------------------------------------ */

// you can round up or down to the closest number of days
// a date in future should return a positive number
// a date in the past should return a negative number

const daysFromNow = () => {

};

console.log(daysFromNow(new Date('07/04/2020')));
// logs days from now

/* ------------------------------------------------------------------------------------------------------------------ */

// isMatch returns true if the first object has all the same keys and values of second object
// note the first object can have extra properties, yet still return true

const isMatch = () => {

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

const letterCounter = () => {

};

console.log(letterCounter('abcdefhi a b c'));
// { a: 2, b: 2, c: 2, d: 1, e: 1, f: 1, h:1, i: 1, ' ': 3 }

/* ------------------------------------------------------------------------------------------------------------------ */

const uniqueConsonant = () => {

};

console.log(uniqueConsonant('abacub'));
// [ 'b', 'c' ]

/* ------------------------------------------------------------------------------------------------------------------ */

const tempConvertor = () => {

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

const tempConvertorErrorHandling = () => {

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

const rejectMeInCaps = () => {

}

rejectMeInCaps('foo')
    .catch( result => console.log(result));
// FOO

rejectMeInCaps('bar')
    .catch( result => console.log(result));
// BAR

/* ------------------------------------------------------------------------------------------------------------------ */

const resolveMeInUpperCase = () => {

};

resolveMeInUpperCase('foo')
  .then( result => console.log(result));
// FOO

resolveMeInUpperCase('bar')
  .then( result => console.log(result));
// BAR

/* ------------------------------------------------------------------------------------------------------------------ */

const onlyEven = () => {

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

const onlyNumbers = () => {

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

const everyOther = () => {

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

const everyNTimes = () => {

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

const delayInSeconds = () => {

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

const onlyNumbers = () => {

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

// Notifier - an event listener
// write the Notifier constructor / class
class Notifier {

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

// Notifier with Unsubscribe
// Fix Notifier so that the only console.log is HELLO
class Notifier{
    constructor(){
        this.listeners = [];
    };
    listen(fn){
        this.listeners.push(fn);
        return ()=> {}//your code here};
    };
    broadcast(message){
        this.listeners.forEach( listener => listener(message));
    };
};

const n = new Notifier();
const unsubscribe = n.listen((message)=> console.log(message.toUpperCase()));
n.broadcast('hello');
unsubscribe();
n.broadcast('world');
/*
HELLO
*/

/* ------------------------------------------------------------------------------------------------------------------ */

// notifyMeAbout - event emitters
// Finish the notify me object
const notifier = {
    listeners: {},
};
  
notifier.notifyMeAbout('sports', (message)=> {
    console.log(`sports ${message}`);
});
  
notifier.notifyMeAbout('cooking', (message)=> {
    console.log(`cooking ${message}`);
});
  
notifier.broadcast('sports', 'The Mets Win');
notifier.broadcast('cooking', 'Here is new pasta recipe!');
notifier.broadcast('politics', 'The election results are in!');
/*
sports The Mets Win
cooking Here is new pasta recipe!
*/

/* ------------------------------------------------------------------------------------------------------------------ */

// subscribeAll
// Fix the notifier so that a subscriber can subscribe to all messages
const notifier = {
    listeners: {},
    subscribe: function(type, fn){
        this.listeners[type] = this.listeners[type] || []; 
        const list = this.listeners[type];
        list.push(fn)
    },
    broadcast: function(type, message){
        let list = this.listeners[type] || [];
        list.forEach( fn => fn(message))
    }
};
  
notifier.subscribe('SPORTS', (message)=> {
    console.log(`SPORTS SUBSCRIBER-${message}`);
});
  
notifier.subscribeAll((message)=> console.log(`ALL SUSCRIBER- ${message}`));

notifier.broadcast('SPORTS', 'sports message')
notifier.broadcast('COOKING', 'cooking message')

/*
SPORTS SUBSCRIBER-sports message
ALL SUSCRIBER- sports message
ALL SUSCRIBER- cooking message
*/

/* ------------------------------------------------------------------------------------------------------------------ */

// context question
// fix the foo object so that foo.bar() logs 'quq'
const foo = {
    bar: ()=>{
        console.log(this.bazz);
    },
    bazz: 'quq' 
};
  
foo.bar();
//quq

/* ------------------------------------------------------------------------------------------------------------------ */

const unsubscribe1 = EE.listen((message)=> {
    console.log(`listener 1 ${message}`)
});
const unsubscribe2 = EE.listen((message)=> {
    console.log(`listener 2 ${message}`)
});
EE.broadcast('how ya doin?');
EE.broadcast('still listening?');
unsubscribe1();
EE.broadcast('how bout now?');
unsubscribe2();
EE.broadcast('anyone out there?');
/*
listener 1 how ya doin?l
istener 2 how ya doin?
listener 1 still listening?
listener 2 still listening?
listener 2 how bout now?
*/

/* ------------------------------------------------------------------------------------------------------------------ */

const slackChannel = new SlackChannel('FSA');

slackChannel.listen((message)=> {
    console.log(`Message: ${message}`);
});

slackChannel.broadcast('Here is a regular message');
slackChannel.broadcastLoud('loud message');
/*
Message: Welcome to FSA channel
Message: Here is a regular message
Message: LOUD MESSAGE
*/

/* ------------------------------------------------------------------------------------------------------------------ */

const fsa = new Slack({ workspace: 'FSA'});
const google = new Slack({ workspace: 'Google'});

google.sub('#jokes', (message)=> console.log(message));

google.pub('#jokes', 'What do you call a grandfather clock? An old timer!')

fsa.sub('2001-FLEX', (message)=> {
    console.log(message)
});

fsa.sub('#general', (message)=> {
    console.log(message)
});

fsa.pub('2001-FLEX', 'stretch is open');
fsa.pub('#general', 'hello there!');
fsa.pub('#general', 'hello there again!!');

/*
Google - #jokes - What do you call a grandfather clock? An old timer!
FSA - 2001-FLEX - stretch is open
FSA - #general - hello there!
FSA - #general - hello there again!!
*/

/* ------------------------------------------------------------------------------------------------------------------ */

// Slack Unsubscribe
// Fix the sub method so that a listener can unsubscribe
class Slack{
    constructor({ workspace }){
        this.workspace = workspace;
        this.listeners = {};
    }
    getChannel(type){
        this.listeners[type] = this.listeners[type] || [];
        return this.listeners[type];
    }
    sub(type, fn){
        this.getChannel(type).push(fn);
    }
    pub(type, msg){
        this.getChannel(type).forEach( listener => listener(`${this.workspace } - ${type} - ${msg}`))
    }
}
const fsa = new Slack({ workspace: 'FSA'});
const google = new Slack({ workspace: 'Google'});

google.sub('#jokes', (message)=> console.log(message));

google.pub('#jokes', 'What do you call a grandfather clock? An old timer!')

fsa.sub('2001-FLEX', (message)=> {
    console.log(message)
});

const unsubscribe = fsa.sub('#general', (message)=> {
    console.log(message)
});

fsa.pub('2001-FLEX', 'stretch is open');
fsa.pub('#general', 'hello there!');
unsubscribe();
fsa.pub('#general', 'hello there again!!');

/*
Google - #jokes - What do you call a grandfather clock? An old timer!
FSA - 2001-FLEX - stretch is open
FSA - #general - hello there!
*/

/* ------------------------------------------------------------------------------------------------------------------ */

// StateHolder
// write StateHolder
const stateHolder = new StateHolder(2);

stateHolder.sub((state)=> {
  console.log(state);
})
stateHolder.increase(7);
stateHolder.increase(2);

console.log(stateHolder.getState());
/*
9
11
11
*/

/* ------------------------------------------------------------------------------------------------------------------ */

// StateHolder - decrease
// add the decrease method to StateHolder
class StateHolder{
    constructor(start){
        this.state = start;
        this.listeners = [];
    }
    getState(){
        return this.state;
    }
    sub(listener){
        this.listeners.push(listener);
    }
    increase(value){
        this.state += value; 
        this.listeners.forEach( listener => listener(this.state));
    }
}
const stateHolder = new StateHolder(2);

stateHolder.sub((state)=> {
    console.log(state);
})
stateHolder.increase(7);
stateHolder.decrease(3);
stateHolder.decrease(6);
stateHolder.increase(2);

console.log(stateHolder.getState());
/*
9
6
0
2
2
*/

/* ------------------------------------------------------------------------------------------------------------------ */

// StateHolder - DRY
// The StateHolder code is not DRY
// write a broadcast method which will help dry out the code
class StateHolder{
    constructor(start){
        this.state = start;
        this.listeners = [];
    }
    getState(){
        return this.state;
    }
    sub(listener){
        this.listeners.push(listener);
    }
    increase(value){
        this.state += value; 
        this.listeners.forEach( listener => listener(this.state));
    }
    decrease(value){
        this.state -= value; 
        this.listeners.forEach( listener => listener(this.state));
    }
}
const stateHolder = new StateHolder(2);

stateHolder.sub((state)=> {
    console.log(state);
})
stateHolder.increase(7);
stateHolder.decrease(3);
stateHolder.decrease(6);
stateHolder.increase(2);

console.log(stateHolder.getState());
/*
9
6
0
2
2
*/

/* ------------------------------------------------------------------------------------------------------------------ */

// StateHolder - Unsubscribe
// allow a subscriber to unsubscribe
class StateHolder{
    constructor(start){
        this.state = start;
        this.listeners = [];
    }
    getState(){
        return this.state;
    }
    sub(listener){
        this.listeners.push(listener);
    }
    broadcast(){
        this.listeners.forEach( listener => listener(this.state));
    }
    increase(value){
        this.state += value;
        this.broadcast();
    }
    decrease(value){
        this.state -= value;
        this.broadcast();
    }
}
const stateHolder = new StateHolder(2);

const unsub = stateHolder.sub((state)=> {
    console.log(state);
})
stateHolder.increase(7);
stateHolder.decrease(3);
stateHolder.decrease(6);
unsub();
stateHolder.increase(2);

/*
9
6
0
*/

/* ------------------------------------------------------------------------------------------------------------------ */

// Chat
// write the Chat contructor
const chat = new Chat();
const prof = chat.join('prof', (message)=> {
    console.log(`TO PROF: ${message}`);
});

const lucy = chat.join('lucy', (message)=> {
    console.log(`TO LUCY: ${message}`);
});

const curly = chat.join('curly', (message)=> {
     console.log(`TO CURLY: ${message}`);
});

prof.talk('hi');
lucy.talk('hello');
curly.talk('whats up!');

/*
TO PROF: lucy has joined chat!
TO PROF: curly has joined chat!
TO LUCY: curly has joined chat!
TO LUCY: prof says hi
TO CURLY: prof says hi
TO PROF: lucy says hello
TO CURLY: lucy says hello
TO PROF: curly says whats up!
TO LUCY: curly says whats up!
*/

/* ------------------------------------------------------------------------------------------------------------------ */

// Chat with hints
// Chat is almost complete
// finish it up
class Chat{
    constructor(){
        this.listeners = {};
    }
    join(str, fn){
        Object.values(this.listeners).forEach(listener => listener(`${str} has joined chat!`));
        this.listeners[str] = fn;
        return {
            talk: (message)=> {
            }
        };
    }
}
const chat = new Chat();
const prof = chat.join('prof', (message)=> {
    console.log(`TO PROF: ${message}`);
});

const lucy = chat.join('lucy', (message)=> {
    console.log(`TO LUCY: ${message}`);
});

const curly = chat.join('curly', (message)=> {
    console.log(`TO CURLY: ${message}`);
});

prof.talk('hi');
lucy.talk('hello');
curly.talk('whats up!');

/*
TO PROF: lucy has joined chat!
TO PROF: curly has joined chat!
TO LUCY: curly has joined chat!
TO LUCY: prof says hi
TO CURLY: prof says hi
TO PROF: lucy says hello
TO CURLY: lucy says hello
TO PROF: curly says whats up!
TO LUCY: curly says whats up!
*/

/* ------------------------------------------------------------------------------------------------------------------ */
