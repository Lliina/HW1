// *1. Написати функцію, яка приймає в якості аргумента висоту прямокутника і його ширину, повертає площу прямокутника.*/


// function Area(length, width) {
//     const result = length * width;
//     return result;
// }
// let functionResult = Area(2, 5);
// console.log(functionResult);


/*2. Написати функцію, яка приймає в якості аргумента діаметр кола і повертає довжину кола (длина окружности по диаметру) */

// let Pi = 3.14;

// function Length(diametr) {
//     const result = diametr * Pi;
//     return result;
// }

// let functionResult = Length(19);
// console.log(functionResult);

/* 3. Написати функцію, яка приймає в якості аргумента висоту циліндра та діаметр основи і повертає об'єм циліндра.*/
// let Pi = 3.14;


// function Volume(diametr, height) {
//     const result = (Math.pow(diametr, 2) * Pi)/4 * height;
//     return result;
// }
// let functionResult = Volume(5, 5);
// console.log(functionResult);

/* 4. Написати функцію, яка приймає два числа (діапазон) і виводити на консоль всі числа з цього діапазону, які діляться на 5.*/


// for (let i = 6; i <= 30; i++){
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }

/* 6. Реалізовати гру FizzBuzz для 100 чисел.*/

// for ( i = 1; i <= 100; i++) {

//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

/* Написати функцію, яка приймає коефіцієнти квадратного рівняння і вирішує рівняння, і виводить на консоль можливі значення Х.*/
let a = Number(prompt("Add Number One"));
let b = Number(prompt("Add Number One"));
let c = Number(prompt("Add Number One"));

function Square(a, b, c) {
    let discr = (a, b, c) => Math.pow(b, 2) - 4 * (a * c);
    let d = discr(a, b, c);
    if (d < 0)
        return [d];
    let x1 = (-b + Math.sqrt(discr)) / (2 * a);
    let x2 = (-b - Math.sqrt(discr)) / (2 * a);
    return [x1, x2]
}

