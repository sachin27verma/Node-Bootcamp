console.log("Starting");
// Operating system module by nodejs (os)

// const os =require('os')
// const user=os.userInfo();
// console.log(user)
// console.log(os.uptime())
// console.log(os.type())
// console.log(os.release())

// path module

// const path =require('path');
// console.log(path.sep);
// const filepath= path.join('/content','subfolder','test.txt');
// console.log(filepath);

// read and write file by 'fs' module

// sync////////////////

// const {readFileSync , writeFileSync}= require('fs');

// const first = readFileSync('./content/subfolder/test.txt','utf8');
// console.log(first)

// writeFileSync('./content/subfolder/writefile.txt','writing file using writefilesync function ');

// Async(callback)

// const {readFile,writeFile} = require('fs')

// readFile('./content/subfolder/test.txt','utf-8',(err,result)=>{
//     if(err)
//     {
//         console.log(err)
//         return ;
//     }
//     const first =result;

//     writeFile('./content/subfolder/writefileusingasync',`Here is the result of Async write ${first}`,(err,result)=>{
//         if(err)
//         {
//             console.log(err)
//             return;

//         }
//         console.log(result)
//     }
//     )
// })

// *****HTTP Module******//
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to the home page");
  }
 else if (req.url === "/about") {
    res.end("welcome to the history page");
  }
  else{
    res.end(`
   <h1>Oops!</h1>
   <p>we are not able to find the page </p>
    <a href='/'>back home</a>
   `);
  }

  
});

server.listen(5000);
