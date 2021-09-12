const http = require('http');
const url = require('url')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const urlData = url.parse(req.url, true);
    const path = urlData.pathname
    
    // if (path == '/todos') {
    //     console.log(urlData);
    //     res.end('todos ' + 'Limit: ' + urlData.query.limit);
    // } else {
    //     res.end('Route Not Found')
    // }




    // A: send request to server with following query
    // 1: username
    // 2: age
    // 3: salary
    const username = urlData.query.username;
    const age = urlData.query.age;
    const salary = urlData.query.salary;

    // B: use query params to create file with name: {username}.txt
    // C: file must contains: {username} with age: {age} will get a sallary of ${sallary}
    fs.writeFileSync(`${username}.txt`, `${username} with Age ${age} will get a sallary of ${salary}`)

    res.end('File Created')
})
// pathName: /todos  |  query: {limit: 5}

server.listen(3000, ()=> console.log('Server Is Running On Port 3000'))


