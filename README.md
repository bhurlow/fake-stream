fake-stream
===========

### pipe some fake users up in here:

```
var fakestream = require('fake-stream')(500)
fakestream.pipe(process.stdout)
```

###usage
---

### fakestream(speed?)

speed is optional

speed defaults to `500` ms

outputs new-line delimited JSON strings



### to install
---
```
npm install fake-stream
```






