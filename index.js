"use strict";
// 1 Вычислить сумму первых N элементов последовательности . параметр N задает пользователь
// (например n=4 , 1+2+3+4)
const almostFactorial = function (n) {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += i;
  }
  return result;
};

// 2.1 Создать объект Student который содержит следующие свойства: имя, фамилию, пол, контактные данные.
// 2.2 Создать объект, который содержит свойства, о факультете и кафедре.
//2.3 Связать объекты между собой. т.е. прописать данные об факультете и кафедре для студента
//2.4 Реализовать функцию выводит на экран всю информацию о студенте

class University {
  constructor(name, kafedral) {
    this.name = name;
    this.kafedral = kafedral;
  }
}

class Student {
  constructor(
    firstName,
    surname,
    isMail = false,
    phoneNumber,
    mail,
    universityName,
    kafedral
  ) {
    this.firstName = firstName;
    this.surname = surname;
    this.isMail = isMail;
    this.phoneNumber = phoneNumber;
    this.mail = mail;
    this.university = new University(universityName, kafedral);
  }
  studentInfo() {
          return `${this.firstName} ${this.surname}. \n Пол: ${this.isMail ? 'Мужской.' : 'Женский.'} \n ${this.phoneNumber} \n ${this.mail} \n ${this.university.name} ${this.university.kafedral}`;
    } 
  
}

const jorick = new Student(
  "Georgii",
  "Vasgenov",
  false,
  380993672418,
  "aaaa@gmail.com",
  "ZNTU",
  "International Tourism"
);

// 3.1 Создать числовой массив и проинициализировать его из 25 элементов.
// 3.1*Инициализация с помощью случайных чисел




const randomNumberConstructor = function(max, min, cicles, array) {
    for(let i = 0; i < cicles; i++) {
    let result =  Math.floor(Math.random() * (max - min + 1)) + min;
    array.push(result)
  }
}

const numberObject = [];
randomNumberConstructor(1,100,25,numberObject);

// 3.2 Вывести элементы с четными индексами
const evenIndexNumber = function(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if(i % 2 === 0) {
      result.push(array[i])
    }
  }
  return result;
}
// 3.3 Вывести только четные элементы (четные числа делятся на 2 без остатка)
const evenNumberOfArray = function(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0) {
      result.push(array[i])
    }
  }
  return result;
}

// 3.4 Вывести индексы нулевых элементов (элемент равен нулю)

const indexisOfZeroElement = function (array) {
  
}

// 3.5 Подсчитать количество нулевых элементов





// 4 Создать классы:
// - Книга (автор, название, год издания, издательство)
// - Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)

class Book {
  constructor(author, bookName, year, whoPrinted) {
    this.author = author;
    this.bookName = bookName;
    this.year = year;
    this.whoPrinted = whoPrinted;
  }
}

class ElectronikBook extends Book {
  constructor(author, bookName, year, whoPrinted, formate, codeNumber) {
    super(author,bookName,year,whoPrinted)
    this.formate = formate;
    this.codeNumber = codeNumber;
  }
}





// 5 Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;

const fizzBuzz = function(n) {
  if(n > 1 && !isNaN(n)) {
    for(let i = 1; i <= n; i++) {
      if(i % 3 === 0 && !(i % 5 === 0)) {
        console.log(`${i}  fizz`)
      }
      if(i % 5 === 0 && !(i % 3 === 0)) {
        console.log(`${i}  buzz`)
      }
      if(i % 3 === 0 && i % 5 === 0) {
        console.log(`${i}  fizzbuzz`)
      }
    }
  }
}