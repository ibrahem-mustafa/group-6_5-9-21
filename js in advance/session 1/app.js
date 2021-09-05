// Var

// var username;

// username = 'ahmed'

// var username = "ahmed1997";

// var un = "ahmed";

// var userAge = 15;

// var ua = 15;

// Function

// function sum(x, y) {
//   return x + y;
// }

// function getAge(birthDate) {
//   return new Date().getFullYear() - birthDate.getFullYear();
// }

// var result = getAge(new Date("12/21/1997"));

// console.log(result)

// Array

// var arr = [
//   'name',
//   15,
//   true,
//   ['dchs'],
//   {
//     name: 'ahmed'
//   },
//   function () {
//     console.log('dfasdf')
//   }
// ]

// Loops
// var salaries = [1000, 2000, 4000, 8000, 16000];

// => For

// for(var i = 0; i< salaries.length; i++) {
//   console.log(salaries[i])
// }

// => while

// I:0 ----- s:1 => 1000
// I:0 ----- s:2 => 1000
// I:1 ----- s:1 => 2000
// I:1 ----- s:2 => 2000
// I:2 ----- s:1 => 4000
// I:2 ----- s:2 => 4000
// I:2 ----- s:1 => 4000
// I:2 ----- s:2 => 4000
// I:3 ----- s:1 => 8000
// I:3 ----- s:2 => 8000
// I:4 ----- s:1 => 16000
// I:4 ----- s:2 => 16000

// var currentIndex = 0;
// var step = 1;

// while(currentIndex < salaries.length) {
//   console.log('==============================')
//   console.log('From While: ' + salaries[currentIndex])
//   if (step == 1) {
//     step++;
//   } else {
//     currentIndex++;
//     step--
//   }
// }

// => do while

// var counter = 0;

// do {
//   console.log(counter);
//   counter++
// } while(counter < 10)

// var continuosPrinting = false;
// var count = 0;
// do {
//   console.log("Printing");
//   if (continuosPrinting && count == 1) {
//     continuosPrinting = false;
//   }
//   count++;
// } while (continuosPrinting);

// if condition
// var isOld = false;

// if (isOld) {
//   console.log('You Are Old')
// } else {
//   console.log('You Are Young')
// }

// var age = 15;

// if (age < 18) {
//   console.log('Not Allowed')
// } else if (age < 25) {
//   console.log('Come Next Year')
// } else if (age < 36) {
//   console.log('asdflkjsdjfl')
// } else {
//   console.log('Welcome')
// }

// Switch

// client | admin | publisher
// var userType = 'host'

// switch(userType) {
//   case 'admin':
//     console.log('Admin Page');
//     break;
//   case 'client':
//     console.log('Client Page')
//     break;
//   case 'publisher':
//     console.log('Publish Page');
//     break;
//   default:
//     console.log('Not A Valid User Type')

// }

// recursive function

// var  msgSended =  false;
// var sendingCount = 0;

// function sendMsg() {
//   sendingCount ++
//   console.log('Sending Msg....')

//   if (msgSended) {
//     console.log('Message Sended Successfully.')
//   } else if (sendingCount < 10) {
//     if (sendingCount == 5) {
//       msgSended = true;
//       sendMsg()
//     } else {
//       sendMsg()
//     }
//   }
// }

// sendMsg();

// var counter = 0;
// limit = 5;
// c = 1 || 1 < 5 ? continue : stop
// c = 2 || 2< 5 ? continue : stop
// c = 3 || 3 < 5 ? continue : stop
// c = 4 || 4 < 5 ? continue : stop
// c = 5 || 5 < 5 ? continue : stop

// function increment(limit) {
//   counter++;
//   console.log(counter);
//   if (counter < limit) {
//     increment(limit);
//   }
// }

// increment(5);

// function arguments

// function f1(arg) {}

// f1('')

// f1(2)

// f1(true)

// f1([])

// f1({})

// f1(function() {

// })

// function printAll(list) {
//   for (var i = 0; i < list.length; i++) {
//     console.log(list[i]);
//   }
// }

// printAll([1, 'ali', 3, 'mohsen', 5, true, false])

// function sum(x, y, cb) {
//   var result = x + y;
//   if(cb) {
//     cb(result);
//   }
// }

// function afterSum(result) {
//   console.log("Result: " + result);
// }

// sum(10, 20, afterSum);

// Self Invoking Function

// function onLoad() {
//   console.log('On Load Process');
// }

// onLoad();

// (function () {
//   console.log("On Load Process");
// })();

// HOISTING


var username = "ahmed";


if (true) {
  var username = 'ali'
  console.log(username)
}

console.log(username)

add(1, 2);
function add(x, y) {
  console.log(x + y);
}

// GUI => Graphical User Interface
// CLI => Command Line Interface

// API => Application programming Interface
/**         API                                                  API
 * [  TODO APPLICATION  ]   <======== API ==========>   [ACTIVITY APPLICATION]
 */

// fetch from api
// https://jsonplaceholder.typicode.com/todos

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data)
//   });



