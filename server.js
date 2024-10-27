const http = require("http");
const server = http.createServer(function (req, res) {
  // Reply to them with hello world
  if (req.url === "/getSecretData") {
    res.end("No secret data");
  }
  res.end("Hello world1");
});
server.listen(7777);
