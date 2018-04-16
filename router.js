function route(handle, pathname, response) { //function to check if a request handler for given pathname exists
    console.log("About to route a request for" + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response);
    //    return handle[pathname] ();
    } else {
        console.log("No request handler found for" + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
        // return "404 Not found";
    }

}
exports.route = route;