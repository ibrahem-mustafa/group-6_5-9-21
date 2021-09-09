// const methods = require('./methods')

// methods.print('Hello From Node Js')

// console.log( methods.plus(10, 20))

// // module.exports = {
// //     plus
// // }

const http = require("http");
const fs = require("fs");

// fs.mkdir('assets', (err) => {

//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Assets Folder Created')
//         console.log('After Creating Assets Folder')
//     }

// })

// try {

//     const folderExists = fs.existsSync('assets')

//     if (!folderExists) {
//         fs.mkdirSync("assets");
//         console.log("Assets Folder Created");
//         console.log("After Creating Assets Folder");
//     } else {
//         console.log('Folder Already Exists')
//     }
    
// } catch(err) {
//     console.log('Error Exist')
// }

// Remove Directory
// fs.rmdirSync('assets')

// Create File
// fs.writeFileSync('notes.txt', 'Hello From Node Js')
// fs.writeFileSync('notes.txt', 'Welcome From NodeJs')

// Append To File
// fs.appendFileSync('notes.txt', ' Welcome Again')

// Remove File
// fs.rmSync('notes.txt')

// Read Files
// const fileData = fs.readFileSync('./assets/notes.txt')


//TODO: Search About How To Convert JSON to String
const todos = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
];

//  /todos => [todos]

// /todoApp => todo task

const server = http.createServer((req, res) => {
    const url = req.url;

    let data;

    if (url === '/about') {
        data = fs.readFileSync('./views/about.html')
    } else if (url === '/contact') {
        data = fs.readFileSync("./views/contact.html");
    } else if (url === '/') {
        data = fs.readFileSync("./views/index.html");
    } else if (url === '/js') {
        data = fs.readFileSync('./views/main.js');
    } else {
        data = fs.readFileSync("./views/404.html");
    }

    res.end(data);

})

server.listen(5000, () => console.log('Server Is Running On Port 5000'))
