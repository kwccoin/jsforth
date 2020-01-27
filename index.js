const http = require('http')
const url = require('url')
const fs = require('fs')
// const io = require('socket.io')

//server
const server = http.createServer((request, response) => {
	let path = url.parse(request.url).pathname;
	let responseError = () => {
		response.writeHead(404)
		response.write('404 - Not Found')
		response.end()
	}
	let responseHTML = (data) => {
		response.writeHead(200, {'Content-Type': 'text/html'})
		response.write(data, 'utf8')
		response.end()
	}
	let responseJS = (data) => {
		response.writeHead(200, {'Content-Type': 'text/javascript'})
		response.write(data, 'utf8')
		response.end()
	}
	switch (path) {
		case '/':{
			fs.readFile(__dirname + '/index.html', (error, data)=>{
				if (error){
					responseError()
				} else {
					responseHTML(data)
				}
			})
			break;
		}
		case '/index.html':{
			fs.readFile(__dirname + path, (error, data)=>{
				if (error){
					responseError()
				} else {
					responseHTML(data)
				}
			})
			break;
		}
		case '/jsforth.js':{
			fs.readFile(__dirname + path, (error, data)=>{
				if (error){
					responseError()
				} else {
					responseJS(data)
				}
			})
			break;
		}
		case '/poker.min.js':{
			fs.readFile(__dirname + path, (error, data)=>{
				if (error){
					responseError()
				} else {
					responseHTML(data)
				}
			})
			break;
		}
		case '/jquery-1.11.0.min.js':{
			fs.readFile(__dirname + path, (error, data)=>{
				if (error){
					responseError()
				} else {
					responseHTML(data)
				}
			})
			break;
		}
		default:{
			responseError()
			break;
		}
	}
	
})

// console.log("\n\njust run it but now it is a FP with 13 cards still 2 players<-----------===\n");
// require('./myJS/cardC-FP-1-13cards.js');

server.listen(5566);

//console.log("\n\njust run it but now it is ALL<===\n")
//var ALLGame = require('./index-runALLGame.js')
//ALLGame(); // <-- note the different syntax of the OO or new class thing

//console.log("\n\njust run it but now it is a FP<-----------===\n");
//require('./myJS/cardC-FP-1-8cards.js');

