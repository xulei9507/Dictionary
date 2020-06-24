// node.js事件驱动，非阻塞式i/o（读写没有先后顺序）
// 引入模块
var fs = require('fs'); //fs对文件的读写操作
// 1.写文件  ./当前文件下
// 同步写文件 按顺序输出
// 运行 cmd     node app.js     node app
// console.log('111');
// var res = fs.writeFileSync('./www/w2.txt', '第一个文件', 'utf8');
// console.log(res); //输出undefined 写入成功
// console.log('222');
// 111
// undefined
// 222
// 2.异步写
// console.log('111');
// fs.writeFile('./www/t1.txt', '11111', 'utf8', function(err) {
//     console.log(err); //输出null 写入成功
//     if (err) {
//         console.log('写入失败');
//         throw err;
//     }
//     console.log('写入成功');
// })
// console.log('222');
// 111
// 222
// null

// 3.读文件
// var data = fs.readFileSync('./www/w1.txt', 'utf8');
// console.log(data)
// fs.readFile('./www/w1.txt', 'utf8', function(err, data) {
//     console.log(err);
//     if (err) {
//         console.log('读失败');
//         throw err;
//     }
//     console.log(data); //data二进制
//     console.log(data.toString()); //转为字符串  'utf8'不用转换
// });

// 4.文件是否存在
// var res = fs.existsSync('./www/index.html');
// console.log(res) //不存在为false
// fs.exists('./www/index.html', function(res) {
//     console.log(res)
// });

// 5.向文件内容追加内容
// var res = fs.appendFileSync('./www/log.txt', '\n这是添加的内容' + new Date(), 'utf8');
// console.log(res);
// fs.appendFile('./www/log.txt', '\n这是异步的内容' + new Date(), function(err) {
//     console.log(err);
//     if (err) {
//         console.log('添加失败');
//         throw err;
//     }
//     console.log('添加成功');
// });

// 6.监听文件
fs.watchFile('./www/t1.txt', function(a, b) {
    console.log(a);
    console.log(b);
})