//Refactored code

var http = require("http");
var url = require("url");

function start (route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        // console.log("Request received." + pathname + " received.");
        console.log("Request for " + pathname + "received. ");



        response.writeHead(200, {"Content-Type": "text/plain"});
        var content = route(handle, pathname);
        response.write("Hello World");
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started."); 
}



exports.start = start;




// var http = require("http"); //1 -requires http module that ships with node.js, accessible through the variable http

// http.createServer(function(request, response) { //2-call a function http module offers: createServer.
//     response.writeHead(200, {"Content-Type": "text/plain"}); //this function returns an object and object has a method named listen, which takes a numerid value indicating port HTTP server is listening
//     response.write("Hello World");
//     response.end();
// }).listen(8888);
