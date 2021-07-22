/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============================== Phase 1 ================================ */
/*
  Make a request with fetch request to GET /posts and print the response
  components to the console.
*/

fetch("localhost:5000/posts")
  .then(res=>res.json())
  .then(res=>console.log(res))



/* =============================== Phase 2 ================================ */
/*
  Make a request with fetch request to POST /posts and print the response
  components to the console.
*/

fetch("localhost:5000",{
  method:"POST",
  headers:{"Content-Type":"application/json"}
})
.then(res=>res.json())
.then(res=>console.log(res))
