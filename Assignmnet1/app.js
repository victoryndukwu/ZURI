// require the http module for making request to the JSON place holder api
// require the fs module for file manipulation
const http = require("http");
const fs = require("fs");

http
  .get("http://jsonplaceholder.typicode.com/posts", (res) => {
    // initialize variable data to an empty string so you can later add data gotten fom the api
    let data = " ";

    // listen for the data event and call a callback function that appends the chunk of data to our initial data variable
    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      // using the synchronous writeFile method, write the data to the posts.json file
      fs.writeFileSync("./result/posts.json", data);
    });
  })
  .on("error", console.error);
