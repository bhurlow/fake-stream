
var Faker = require('Faker')
var es = require('event-stream')

function fakeUser(objects) {

  var o = {
    name: Faker.Name.findName(),
    email: Faker.Internet.email(),
    ip: Faker.Internet.ip(),
    company: Faker.Company.companyName()
  }

  return (objects)
    ? o
    : JSON.stringify(o) + '\n'

}

module.exports = function(speed, objects) {
  speed = speed || 500
  objects = objects || false
  return es.readable(function (count, callback) {
    var _this = this
    setTimeout(function() {
      _this.emit('data', fakeUser(objects))
      callback()
    }, speed)
  })
}

