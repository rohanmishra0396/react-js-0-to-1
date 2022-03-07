const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("hello");
    // reject("oops");
  }, 1000);
});

promise
  .then(function (response) {
    console.log("success response", response);
  })
  .catch(function (response) {
    console.log("failure response", response);
  });
