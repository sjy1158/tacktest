let express = require('express')
let path = require('path')
let proxy = require('http-proxy-middleware');

let app = express()

//开发环境
// app.use('/dev', express.static(__dirname + '/views'))
// app.use('/dev/static', express.static(__dirname + '/static'))

//部署环境
app.use('/', express.static(__dirname + '/dist/views'))
app.use('/static', express.static(__dirname + '/dist/static'))



app.use('/', express.static(path.join(__dirname, '16942')));

// interface proxy
app.use('/api', proxy({
  target: 'http://123.207.151.199:3000', // target host
  changeOrigin: true,            // needed for virtual hosted sites
  ws: true,                      // proxy websockets
  cookieRewrite: true,
  pathRewrite: {
    '^/api/': '/'
  }
}));
app.listen(16942, () => {
  console.log('server start at 16942')
})
module.exports = app
