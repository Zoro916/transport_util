var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var body_parser = require('body-parser');
var multipart = require('connect-multiparty');
var routes = require('./route');
//引入路由主文件，并将所有请求在路由主文件中进行分发

var app = express();

app.set('port', process.env.PORT || 5173);
//API文档静态指向
app.use('/api_doc', express.static('doc'));
//引入跨域请求中间件cors
app.use(cors());
//引入获取request payload数据的multipart中间件
app.use(multipart());
//引入body-parser中间件
app.use(body_parser.urlencoded({
    extended: false
}));
app.use(body_parser.json());

app.get('/', function(req, res) {
    res.send('API服务器已启动,可以提供接口支持。');
});

routes(app);
//启动服务，开始监听端口
app.listen(app.get('port'), function() {
    console.log('服务已启动，请通过 http://localhost:' + app.get('port') + '访问。')
});
