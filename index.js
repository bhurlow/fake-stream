
var Faker = require('Faker')
var es = require('event-stream')

function fakeUser() {
  var o = {
    name: Faker.Name.findName(),
    email: Faker.Internet.email(),
    ip: Faker.Internet.ip(),
    company: Faker.Company.companyName()
  }
  return JSON.stringify(o)
}

module.exports = function(speed) {
  speed = speed || 500
  return es.readable(function (count, callback) {
    var _this = this
    setTimeout(function() {
      _this.emit('data', fakeUser())
      callback()
    }, speed)
  })
}

