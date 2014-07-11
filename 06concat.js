var concatStream = require('concat-stream');

process.stdin.pipe(
  concatStream( function( text ){
    var reversed = text.toString().split('').reverse().join('');
    process.stdout.write( reversed );
    process.stdout.write('\n');
}));
