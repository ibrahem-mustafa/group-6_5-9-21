// ****************************************************** //
// **************** Variable Declaration **************** //
// ****************************************************** //

// var

// console.log(username)

// var username = 'ali'

// if (true) {
//     var username = 'ahmed'
//     console.log(username);
// }
// console.log(username)


// let


// console.log(username) // Reference Error

// let username = 'ali'

// {
//     let username = 'mohammed'
//     console.log(username)    
// }

// if (true) {
//     let username = 'ahmed'
//     console.log(username);
// }

// console.log(username)

// username = 'gamal'
// console.log(username)

// const
// const username = "ali";

// if (true) {
//   const username = "ahmed";
//   console.log(username);
// }

// console.log(username);

// username = 'mohammed' // ERROR

// const in objects ({} || [])

// const usersNames = ['ahmed', 'mohammed', 'ali', 'mohsen']
// usersNames[0] = 'gamal'
// console.log(usersNames)
// usersNames.pop()
// console.log(usersNames)
// usersNames.push('mario')
// console.log(usersNames)

// const user = {
//     name: "ahmed",
//     age: 30
// }

// user.age = 40

// console.log(user)

// ****************************************************** //
// ******************* arrow function ******************* //
// ****************************************************** //

function defaultFunction() {
  console.log("Default Function");
}

const defaultFunctionAsVariable = function () {};



const arrowFunction = () => {};

// [1, 2, 3, 4].forEach( function (item) {} ) Using Default Function

// [1, 2, 3, 4].forEach(function (item) {
//     console.log('Default Function '+ item)
// }); 

// console.log('=======================');

// [].forEach( (item) => {} ) Using Arrow Function

// function (item) {console.log()}
// item => console.log()
// [1, 2, 3, 4].forEach(item => console.log("Arrow Function " + item)
// ); 

// ****************************************************** //
// ********************* FOR LOOPS ********************** //
// ****************************************************** //

const names = ["ahmed", "mohammed", "ali", "khaled"];

// Normal For

// for (let i = 0;  i < names.length; i ++) {
//     console.log(names[i])
// }

// FOR OF

// for (let name of names) {
//     console.log(name)
// }

// FOR IN

// for (let nameIndex in names) {
//     console.log(nameIndex)
// }

// ****************************************************** //
// ********************** CLASSES *********************** //
// ****************************************************** //

// function Car(
//     name,
//     model,
//     price
// ) {
//     function print() {
//         console.log('Car: ' + name + ' With Model: '+ model + ' Price: ' + price)
//     }
//     return {
//         name: name,
//         model: model, 
//         price: price,
//         print: print
//     }
// }

// const bmw = Car('X6', 2021, 1300000)

// bmw.print()

// const fiat = Car('FIAT', 2021, 350000)
// fiat.print()


class Car {
   
    constructor(name, model, price) {
        this.name = name;
        this.model = model;
        this.price = price;
    }

    print() {

        console.log(
          "Car: " + this.name + " With Model: " + this.model + " Price: " + this.price
        );
    }
}

// const bmw = new Car('X6', 2021, 1300000)

// bmw.print()

// const fiat = new Car('FIAT', 2021, 350000)
// fiat.print()


// ****************************************************** //
// ************* FUNCTION REST PARAMETERS *************** //
// ****************************************************** //

function concatStr( splitter, ...str) {
    // let result = ''

    // str.forEach(item => result += ' ' + item)

    return str.join(splitter);
}

const concated = concatStr('-', "My Name", "is", "ahmed", "and", "my", "age", "is", 35);

// console.log(concated)

// ****************************************************** //
// ******************* ARRAY METHODS ******************** //
// ****************************************************** //

const users = [
    {
        name: 'ahmed',
        salary: 2000
    },
    {
        name: 'ali',
        salary: 3000
    },
    {
        name: 'mohammed',
        salary: 5000
    },
    {
        name: 'mohammed',
        salary: 2000
    },
]

// Array.find()

// const user1 = users.find(function (user) {
//     return user.name === 'ali'
// })
// const user1 = users.find((user) => user.name === "mohammed");

// console.log(user1)

// Array.findIndex()

// const userIndex = users.findIndex((user) => user.name === "ali");
// console.log(userIndex)
// users.splice(userIndex, 1)
// console.log(users)

// Array.filter()

// const usersAbove2000 = users.filter((user) => user.salary > 3000);
// console.log(usersAbove2000)

// ADDITIONAL THINGS

// setTimeout

// setTimeout(() => {
//     console.log('After 1 Sec')
// }, 5000)

// setInterval
// let timer = 0
// const interval = setInterval(() => {
//     timer++
//     console.log(timer)
//     if (timer == 10) {
//         clearInterval(interval)
//     }
// }, 1000)


// ****************************************************** //
// ********************** PROMISE *********************** //
// ****************************************************** //


const checkConnection = new Promise((resolve, reject) => {
    const health = true;

    setTimeout(() => {

        if (health) {
            resolve('Connection Established Successfully');
        } else {
            reject('Disconnected From Server');
        }
    }, 2000)

})

checkConnection.then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
})


// fetch("https://jonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log('We Have Some Errors'))
  