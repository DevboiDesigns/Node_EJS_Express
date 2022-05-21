// Async - doesnt finish immediately

const fetchData = () => {
  // -------------- new: constructor function
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done!");
    }, 1500);
  });
  return promise;
};

// setTimeout - node timer method
setTimeout(() => {
  console.log("Timer is done");
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text2) => {
      console.log(text2 + "again");
    });
}, 2000);

console.log("Hello");
console.log("hi");
