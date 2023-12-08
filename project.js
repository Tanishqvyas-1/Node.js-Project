// const name=require('./names')
// const hey=require('./utils')
// const data=require('./alternative-flavor')
// require('./node1')
// console.log(name);
// hey(name.jane)
// console.log(data)

const http=require('http')
const server=http.createServer((req, res)=>{
    if(req.url==='/'){
        res.end('welcome to our home page')
    }
    if(req.url==='/about'){
        res.end('here is our short history')
    }
    res.end(`
    <h1>oops</h1>
    <p>we can't seem to find the page</p>
    <a href="/"> back home</a>
    `)

})

server.listen(5000)
