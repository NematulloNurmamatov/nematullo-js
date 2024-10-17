// let ism = 'nematullo';
// console.log(ism);

// let familya = 'nuramatov';
// console.log(familya);

// let yosh = '18';
// console.log(yosh);

// let isUser = false;
// console.log(isUser);

// let us = false;
// console.log(us);

// let kimdr;
// console.log(kimdr)

// let masalan;
// console.log(masalan)

// let school = null;
// console.log(school)

// let id = Symbol('id');
// console.log(id);

// let id2 = Symbol('id2');
// console.log(id2);

// const al = BigInt(889343489348934);
// console.log(al);

// const ak = BigInt(889);
// console.log(ak);

// let arm = 34;
// console.log(typeof arm);

// let ism = 'nematullo';
// let message = 'salom ' + ism + ' !';
// console.log(message);


// let ism = 'mujohiddin';
// let salom = 'Assalomu aleykum ' + ism + ' !' ;
// console.log(salom);


// const misol = 15;
// const a = misol > 18;
// const b = misol < 20;

// console.log(a&&b);
// console.log(a || b);
// console.log(!a);
// console.log(!b);


// let yosh = '18';
// let ism = 'nematullo';

// console.log(yosh);
// console.log(Number(yosh));

// console.log(yosh + 1);
// console.log(Number(yosh) + 1);
// console.log();
// console.log(Number(ism) + 1);

// let yil = 2024;
// console.log(yil);
// console.log(String(yil));

// console.log('45' - '10' + 10);



// ====================================================================  falsy qiymatlar

// console.log(Boolean(0));
// console.log(Boolean(false));
// console.log(Boolean(''));
// console.log(Boolean(NaN));
// console.log(Boolean(0n));
// console.log(Boolean(undefined));
// console.log(Boolean(null));

// =====================================================================  truthy qiymatlar

// console.log(Boolean('0'));
// console.log(Boolean('salom'));
// console.log(Boolean([]));
// console.log(Boolean({}));
// console.log(Boolean('false'));
// console.log(Boolean(0));


// let ism = '';
// if (ism) {
//     console.log('sizning ismingiz ' + ism);
// } else {
//     console.log('iltimos ism kiriting');
// }

// ========================================================================== functions

// function abs(son1, son2) {
//     return son1 - son2;
// }

// console.log(abs(50, 20));
// const result = abs (40, 30);
// console.log(result - 5);



// function kbadrat (son) {
//     return son * son;
// }

// console.log(kbadrat(10));


// const kvadrat = son => {
//     return son * son;

// }
// console.log(kvadrat(5));


// const kvadrat2 = son => son * son
// console.log(kvadrat(6));


// const print = () => {
//     console.log('salom');
//     console.log('assalom');
// }
// print ()



// const volume = (a, b, c) => a * b * c;
// console.log(volume(2, 3, 6));


// =================================================================   function declarations

// function EvenOrOddDec(number) {
//     if (number % 2 === 0) {
//         console.log(number + ' soni juft');
//     } else console.log(number + ' soni toq');
// }
// EvenOrOddDec (9)

// function a(num) {
//     if (num % 2 === 0) {
//         console.log(num + ' soni juft xojayin');

//     } else {
//         console.log(num + ' soni toq xojayin');

//     }
// }
// a(478);




// function maxDec(number1, number2) {
//     if (number1 >= number2) {
//         return number1;
//     } else {
//         return number2;
//     }
// }
// console.log(maxDec(24, 20));




// function reverseDec(number) {
//     const numberstr = String(number);
//     const reversedstr = numberstr.split('').reverse().join('');
//     return Number = Number(reversedstr);
// }

// console.log(reverseDec(123456));







// =================================================================   function expressions

// const EvenOrOddDec = function (number) {
//     if (number % 2 === 0) {
//         console.log(number + ' is even');
//     } else console.log(number + ' is odd');
// }
// EvenOrOddDec (7);




// const maxExp = function (number1, number2) {
//     if (number1 >= number2) {
//         return number1;
//     } else {
//         return number2;
//     }
// }
// console.log(maxExp(24, 26));




// const reverseExp = function(number) {
//     const numberstr = String(number);
//     const reversedstr = numberstr.split('').reverse().join('');
//     return Number = Number(reversedstr);
// }

// console.log(reverseExp(1234));

// let b = function (number) {
//     if (number % 2 === 0) {
//         console.log(number + ' soni juf jonim');

//     } else {
//         console.log(number + ' soni toq erjonim');

//     }
// }

// b(3467)


// ===================================================================  arrow function 

// const EvenOrOddDec = number => {
//     if (number % 2 === 0) {
//         console.log(number + ' is even');
//     } else console.log(number + ' is odd');
// }
// EvenOrOddDec (20);

// let c = num => {
//     if (num % 2 === 0) {
//         console.log(num + ' soni juft begim');

//     } else {
//         console.log(num + ' soni toq erjonim');

//     }
// }
// c(4876353434)



// const maxArr = (number1, number2) => {
//     if (number1 >= number2) {
//         return number1;
//     } else {
//         return number2;
//     }
// }
// console.log(maxArr(28, 26));




// const reverseArr = number => {
//     const numberstr = String(number);
//     const reversedstr = numberstr.split('').reverse().join('');
//     return  Number(reversedstr);
// }

// console.log(reverseArr(352));



// =============================================================================== Array

// const languages = ['en', 'ru'];

// languages.push('uz');

// console.log(languages);

// let languages = ['a', 'b', 'c'];

// console.log(languages);

// languages.unshift('e');

// console.log(languages);

// let languages = ['en', 'ru', 'uz'];
// console.log(languages);

// languages[1] = 'kr';

// console.log(languages);


// const languages = ['en', 'ru', 'uz'];
// console.log(languages);

// const dlanguages = languages.pop(languages)

// console.log(languages);

// console.log(dlanguages);


// let a = ['a', 'b', 'c'];

// console.log(a);

// let b = a.shift(a);

// console.log(a);
// console.log(b);


// let languages = ['en', 'ru', 'uz'];

// console.log(languages);

// let dlanguages = languages.pop(languages);
// console.log(dlanguages);
// console.log(languages);


// const nmadr = ['a', 'b', 'c'];
// console.log(nmadr);
// const nmadr2 = nmadr.pop(nmadr);
// console.log(nmadr);
// console.log(nmadr2);


// const nmadr = ['a', 'b', 'c'];
// console.log(nmadr);
// let nmadr2 = nmadr.shift(nmadr)
// console.log(nmadr);
// console.log(nmadr2);


// ============================================================= concat elementlarni birlashtirish

// const array1 = [1, 3];
// const array2 = [5, 7, 11];
// const result = array1.concat(array2);
// console.log(result);


// let nmadr = ['a', 'b'];
// let nmadr2 = ['c', 'd'];
// let result = nmadr.concat(nmadr2);
// console.log(result);


// ------------------------------------------------------------------ filter

// const filterValues = number => number > 5;
// const filterValues2 = result.filter(filterValues);
// console.log(filterValues2);


// ------------------------------------------------------------------ map

// const mapValues = number => 'son: ' + number;
// const mapValues2 = result.map(mapValues);
// console.log(mapValues2);


// =================================================------------------  sort values

// const sortValues = (number1, number2) => number1 - number2;
// result.sort(sortValues);
// console.log(result);

// --------------------------------------------------------------------- object 

// const dasturchi = {
//     name: 'Nematullo',
//     age: 18,
//     city: {
//         mamlakat: 'uzb',
//         city: 'tashkent',
//         uy: 6
//     }
// };

// console.log(dasturchi.city.city); 


// const dasturchi = {
//     name: 'Nematullo',
//     age: 18,
//     salomlashish: function () {
//         console.log(' hammaga salom!');
//     }
// };

// console.log(dasturchi.salomlashish()); 

// ------------------------------------------------------------- this function

// let person = {
//     name: 'Nematullo',
//     age: 30,
//     city: 'New York',
//     sayHello: function () {
//         console.log('salom mening ismim ' + this.name);

//     }
// }

// person.sayHello();


// let dasturchi = {
//     ism: 'nematullo',
//     yosh: 19
// }

// console.log(Object.keys(dasturchi));
// console.log(Object.values(dasturchi));
// console.log(Object.entries(dasturchi));



// ------------------------------------------------------------------ if else

// let a = -2;
// if (a > 0) {5
//     console.log('bu son musbat');

// } else {
//     console.log('bu son manfiy');

// }

// const number = 34;
// if (number > 0) {
//     console.log('bu son 0 dan katta');
// } else if (number === 0) {
//     console.log('bu son 0 ga teng');
// } else {
//     console.log('bu son 0 dan kichik');

// }


// ---------------------------------------------------------------------- switch

// const number = 4;
// let outputt;

// switch (number / 2) {
//     case 1:
//         outputt = 'bir';
//         break;
//     case 2:
//         outputt = 'ikki';
//         break;
//     case 3:
//         outputt = 'uch';
//         break;
//     default:
//         outputt = 'topilmadi';
//         break;
// }

// console.log('qiymat ' + outputt);


// ---------------------------------------------------------------------- for

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// let sum = 0;

// for (let i = 0; i <= 11; i++) {
//     sum += i;
// }
// console.log(sum);

// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//         console.log(i);
//         break;
//     }
//     console.log(i);
// }

// const bir = 10;
// const ikki = 30;
// const uch = 14;

// const inRange = (min, max, number) => {
//     if (number >= min && number <= max) {
//         console.log(`berilgan ${number} soni ${min} va ${max} orasida`);
//     } else {
//         console.log(`berilgan son ${min} va ${max} orasida emas`);
//     }
// }

// inRange (bir, ikki, uch)











// const simpleCalculator = (num1, num2, oper) => {
//     switch (oper) {
//         case "add":
//             console.log(`Yig'indisi: ${num1 + num2}`);
//             break;
//         case "subtract":
//             console.log(`ayirmasi: ${num1 - num2}`);
//             break;
//         case "multiply":
//             console.log("Ko'paytmasi:" + num1 * num2);
//             break;
//         case "divide":
//             console.log("Bo'linmasi: " + num1 / num2);
//             break;

//         default:
//             console.log('Aniqlanmagan amal');
//     }
// }
// const a = 20;
// const b = 5;
// const operation = "subtract";
// simpleCalculator(a, b, operation);

// ---------------------------------------------------------------- eng katta element


// const get = (array) => {
//     let largest = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] > largest) {
//             largest = array[i];
//         }
//     }
//     return largest;
// }

// const nums = [6, 100, 120, 90, 346, 40];
// const result = get(nums);
// console.log(`eng katta element ${result}`);


