const { ETIMEDOUT } = require('constants');
const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  req.on("end", () => {
    console.log("test")
    console.log(req.headers["content-type"])
    if(req.headers["content-type"]==="application/json"){
      req.body = JSON.parse(reqBody)
      console.log("Parsing json body",req.body)
    }
    else if(req.headers["content-type"]==="application/x-www-form-urlencoded"){
    // Parse the body of the request as JSON if Content-Type header is
      // application/json
    // Parse the body of the request as x-www-form-urlencoded if Content-Type
      // header is x-www-form-urlencoded
    if (reqBody) {
      req.body = reqBody
      .split("&")
      .map((keyValuePair) => keyValuePair.split("="))
      .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});

      // Log the body of the request to the terminal
      console.log("Parsing percent encoded body",req.body)
    }}

    const resBody = {
      "Hello": "World!"
    };

    // Return the `resBody` object as JSON in the body of the response
  });


  if(req.url === "/posts/:id" && req.method === "GET"){

  }

  if(req.url === "/posts" && req.method === "POST"){

  }

  if(req.url === "/posts/:id" && req.method === "PATCH"){}


  if(req.url === "/users" && req.method === "POST"){}

  if(req.url === "/posts/comments" && req.method === "GET"){}

  if(req.url === "posts/:id/comments" && req.method === "POST"){}

  if(req.url === "posts/:postId/comments/:commentId" && req.method === "PATCH")

  if(req.url === "posts/:postId/comments/:commentId" && req.method === "DELETE")

  if(req.url === "posts/:postId" && req.method === "PUT"){}









});

const port = 3000;

server.listen(port, () => console.log('Server is listening on port', port));
