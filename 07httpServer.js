//In this challenge, write an http server that uses a through stream to write back
//the request stream as upper-cased response data for POST requests.


var http = require('http');
var through = require('through');
var thru = through( write, end );

function write( buf ){
  this.queue( buf.toString().toUpperCase() );
}

function end(){
  this.queue( null );
}

var server = http.createServer( function( req, res){
  if( req.method === 'POST'){

    req.pipe(thru).pipe(res);

  }
  res.end('No Mr.Postman');
});

server.listen(process.argv[2]);