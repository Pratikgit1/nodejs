const fs = require("fs");
const { promisify } = require("util");

const readfileoperation = promisify(fs.readFile);

const data=readfileoperation("sample.txt", 'utf8')
  .then((resdata) => {
    console.log(resdata);
  })
  .catch(() => {
    console.log("error");
  });

  console.log(data)