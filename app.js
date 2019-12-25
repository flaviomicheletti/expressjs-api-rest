var express = require('express')
var app = express()

//
// GET
//
app.get('/', function (req, res) {
    res.send('get')
})

//
// POST
//
app.post('/', function (req, res) {
    res.send('post')
})

//
// PUT
//
app.put('/', function (req, res) {
    res.send('put')
})

//
// DELETE
//
app.delete('/', function (req, res) {
    res.send('delete')
})

var server = app.listen(3000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)
})
