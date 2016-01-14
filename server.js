// var fallback = require('express-history-api-fallback')
var express = require('express')
var app = express()
var http = require('http').Server(app);
const PORT = process.env.PORT || 3000
// for https
// var fs = require('fs')
// var https = require('https')
// https.createServer({
//   key: fs.readFileSync('./ssl-keys/private.key'),
//   cert: fs.readFileSync('./ssl-keys/certificate.pem')
// }, app).listen(8080)
//
var root = __dirname + '/app'
app.use(express.static(root))
// app.use(fallback('index.html', { root: root }))
// require for http
http.listen(PORT, () => {
console.log(`Listening to http://localhost:${PORT}`)
})
