var split   = require('split');
var through = require('through');
var count   = 1;

function write(buf){
  if( count%2 ){
    this.queue( buf.toString().toLowerCase() + '\n' );
  } else {
    this.queue( buf.toString().toUpperCase() + '\n' );
  }
  count++;
}

process.stdin
  .pipe(split())
  .pipe(through( write ))
  .pipe(process.stdout);