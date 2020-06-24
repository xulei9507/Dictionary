var http = require('http');
var fs = require('fs');

// 创建服务器
// 服务器修改要进行重启
var mySever = http.createServer(function(req, res) { //req请求变量  res响应变量
    // console.log(req);
    // console.log(res);
    // var url = req.url;
    var myurl = req.url == '/' ? './view/index.html' : './view/' + req.url;
    console.log(myurl) //    /      //  输入http://127.0.0.1:3000/info.html   返回/info.html
        // var html = fs.readFileSync('./view/index.html')
    if (fs.existsSync(myurl)) {
        var html = fs.readFileSync(myurl)
        res.write(html);
    } else {


    }

    // res.write('<h1>www</h1>');
    // res.write(html);
    res.end(); //结束响应
})

// 监听端口号
// 同一台计算机只能有一个端口号
// 127.0.0.1：3000
mySever.listen('3000', function(err) {
    if (err) {
        console.log(err);
        throw err;
    }
    console.log('服务器已开启，端口号为3000');
})