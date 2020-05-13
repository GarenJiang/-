var http = require("http");
var fs = require("fs");
var url = require("url");
var port = process.argv[2];

if (!port) {
  console.log("请指定端口号好不啦？\nnode server.js 8888 这样不会吗？");
  process.exit(1);
}

var server = http.createServer(function (request, response) {
  var parsedUrl = url.parse(request.url, true);
  var pathWithQuery = request.url;
  var queryString = "";
  if (pathWithQuery.indexOf("?") >= 0) {
    queryString = pathWithQuery.substring(pathWithQuery.indexOf("?"));
  }
  var path = parsedUrl.pathname;
  var query = parsedUrl.query;
  var method = request.method;

  /******** 从这里开始看，上面不要看 ************/

  console.log("有个傻子发请求过来啦！路径（带查询参数）为：" + pathWithQuery);
  let x = path.match(/\.[A-Za-z]{1,}/)[0].slice(1);
  let y = path.match(/public\/([A-Za-z0-9]{1,}\.[A-Za-z]{1,})/)[1];
  let type = {
    html: "text/html",
    js: "text/javascript",
    json: "text/json",
    css: "text/css",
    jpg: "image/jpeg",
  };
  if (path.indexOf("public") === -1) {
    response.statusCode = 404;
    response.setHeader("Content-Type", "text/html;charset=utf-8");
    response.write(`只接受查询静态文件`);
    response.end();
  } else {
    response.statusCode = 200;
    response.setHeader("Content-Type", `${type[x]};charset=utf-8`);
    response.write(fs.readFileSync(`public/${y}`));
    response.end();
  }

  /******** 代码结束，下面不要看 ************/
});

server.listen(port);
console.log(
  "监听 " +
    port +
    " 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:" +
    port
);
