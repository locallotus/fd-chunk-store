var Store = require('../')

var store = Store(5, './wow')
store.put(0, new Buffer('hello'), function (err) {
  store.get(0, function (err, buf) {
    console.log(buf)
  })
})
