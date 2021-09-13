var http = require('http');

// import http form 'http;
var fs = require('fs');

http.createServer(function (req, response) {
        // response.write('<h1> hello wodniak</h1><br>kurwa ja to gość');
        // response.end();
        var filename = 'index.html';
        fs.readFile(filename, function(err, data){
                if (err){
                        response.writeHead(404, {'Content-Type': 'text/html'});
                        return response.end("404 not found");
                }
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(data);
                return response.end();
        });

}).listen(8080);

