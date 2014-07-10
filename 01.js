var fs = require('fs');

fs.createReadStream( './ballz.txt' ).pipe( process.stdout );