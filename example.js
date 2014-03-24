
var fakestream = require('./index')(1000)
fakestream.pipe(process.stdout)
