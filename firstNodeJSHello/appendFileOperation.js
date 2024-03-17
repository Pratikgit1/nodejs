const fs = require("fs");
const { promisify } = require("util");

const appendfilep = promisify(fs.appendFile);

appendfilep("sample.txt", " This is Appended")
  .then(() => {
    console.log("append successfully");
  })
  .catch(() => {
    console.log("append  not successfully");
  });
