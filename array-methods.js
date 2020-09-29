/* ARRAY METHODS EXAMPLE */

/* Out example arrays */
const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrStr = ["One", "Two", "Three", "Four", "Five"];

/* ---------- ES1 ---------- */

/* 1. concat() */
  /* joins two or more arrays into one */
let concatArr = arrNum.concat(arrStr);
console.log("Ex1: concatenation of two arrays: " + concatArr);

/* 2. join() */
  /* makes string from array, optionally we could add separator as a parameter */
let stringFromArray = arrNum.join("-"); // Optional argument: separator
console.log("Ex2: string from array: " + stringFromArray);

/* 3. pop() */
  /* removes element from the end of the array, mutates original array */
arrStr.pop();
console.log("Ex3: remove last element of the array: " + arrStr);

/* 4. push() */
  /* add element at the end of the array */
arrStr.push("Five");
console.log("Ex4: add element at the end of the array: " + arrStr);

/* 5. shift() */
  /* remove first element of the array */
arrStr.shift();
console.log("Ex5: remove first element of the array: " + arrStr);

/* 6. unshift() */
  /* add element at the begining of the array */
arrStr.unshift();
console.log("Ex6: add element at the begining of the array: " + arrStr);

/* 7. reverse() */
  /* reverse original array */
arrNum.reverse();
console.log("Ex7: Reversed array: " + arrNum);
arrNum.reverse();

/* 8. slice() */
  /* cut fragment of the array */
let from5To8 = arrNum.slice(4, 8); // First element included, last - not included
console.log("Ex8: sliced array from 5 to 8: " + from5To8);

/* 9. splice() */
  /* add items at specified index, optionall remove items */
arrStr.splice(2, 3, "Fifty");
console.log("Ex9: example of splice method " + arrStr);

/* 10. sort() */
  /* sort original array, default ascending */
arrStr.sort();
console.log("Ex10: sorted array " + arrStr);

/* 11. toString() */
  /* converts array to string */
let strToString = arrNum.toString();
console.log("Ex11: array to string with ',' separator " + strToString);

/* 12. valueOf() */
  /* just returns array */
console.log("Ex12: just original array: " + arrNum.valueOf());

/* ---------- ES3 ---------- */

/* 13. some() */
  /* checks if at least one element meet requirements */
arrNum.unshift(-1);
let isThereNumberLesserThan0 = arrNum.some(num => (num<0));
console.log("Ex13: Is there a number lesser than 0? " + isThereNumberLesserThan0);
arrNum.shift();

/* ---------- ES5 ---------- */

/* 14. every() */
  /* checks if all elements meet requirements */
let areAllNumbersLessThan11 = arrNum.every((num) => (num < 11));
console.log("Ex14: Are all numbers in array less than 11? " + areAllNumbersLessThan11);

/* 15. filter() */
  /* create new array from elements that meet requirements */
const evenNum = arrNum.filter(num => (num%2===0));
console.log("Ex15 new array with only even numbers: " + evenNum);

/* 16. forEach() */
  /* do something with every element in the array */
console.log("Ex16: forEach() method in action");
arrNum.forEach(num => { console.log(num*2 )});

/* 17. indexOf() */
  /* returns index of given element */
let indexOfTwo = arrStr.indexOf("Two");
console.log("Ex17: Index of two in arrStr: " + indexOfTwo);

/* 18. isArray() */
  /* checks if parameter is an array */
let isArray = Array.isArray(arrNum);
console.log("Ex18 Is arrNum array? " + isArray);

/* 19. lastIndexOf() */
  /* returns last index of given value */
arrNum[10] = 10;
let lastIndexOf10 = arrNum.lastIndexOf(10);
console.log("Ex19: Last index with number 10: " + lastIndexOf10);
arrNum.pop();

/* 20. map() */
  /* creates new array from given array */
let doubledArray = arrNum.map(num => (num*=2));
console.log("Ex20: Array with numbers multiply by 2: " + doubledArray);

/* 21. reduce() */
  /* get one value from array by doing some operations on elements */
let sumOfNumbersInArray = arrNum.reduce((total, num) => (total+=num));
console.log("Ex21: sum of numbers in array: " + sumOfNumbersInArray);

/* 22. reduceRight() */
  /* same as reduce, but do operations from right to left */
let arrNum2 = [10, 20, 30, 40, 50];
let subst = arrNum2.reduceRight((total, num) => (total-=num));
console.log("Ex22: 50 - 40 - 30 - 20 - 10 = " + subst);

/* ---------- ES6 ---------- */

/* 23. copyWithin() */
  /* copy x (first argument) elements except for first y (second argument) and paste them from index x */
let oneToFive = arrNum.copyWithin(5, 0);
console.log("Ex23: copyWithin() method in action: " + oneToFive);
arrNum[5] = 6;
arrNum[6] = 7;
arrNum[7] = 8;
arrNum[8] = 9;
arrNum[9] = 10;

/* 24. entries() */
  /* returns key - value pairs to iterate */
let entries = arrStr.entries();
console.log("Ex24: entries() method in action:")
for(let x of entries) {
  console.log("Index: " + x[0] + ", Value: " + x[1]);
}

/* 25. fill() */
  /* fills array with given value (first argument) from given index (second argument) to given index (third argument) */
arrStr.fill("Number", 1, 3);
console.log("Ex25: fill array with new value from index 1 to 2: " + arrStr);
arrStr[1] = "Two";
arrStr[2] = "Three";

/* 26. find() */
  /* returns first element which meet requirements */
let firstElementWhichIsNaN = arrStr.find(item => (isNaN(item)));
console.log("Ex26: First element which is NaN: " + firstElementWhichIsNaN);

/* 27. findIndex() */
  /* similar to find(), but returns index */
let indexOfFirstOddElement = arrNum.findIndex(num => (num%2===1));
console.log("Ex27: Index of first odd element in numbers array: " + indexOfFirstOddElement);

/* 28. from() */
  /* makes array from iterable object, could map with second argument */
let str = "ABCDEF";
let newArrStr = Array.from(str, (item) => ("Letter: " + item));
console.log("Ex28: New array with from() method: " + newArrStr);

/* ---------- ES7 ---------- */

/* 29. includes() */
  /* checks if array contains given value */
let doesArrayContain2 = arrNum.includes(2);
console.log("Ex29: Does array contain numer 2? " + doesArrayContain2);


