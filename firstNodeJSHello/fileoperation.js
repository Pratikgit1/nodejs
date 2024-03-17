const fs = require("fs");
const { promisify } = require("util");

const writeFile = promisify(fs.writeFile);
writeFile("sample.txt", "This is the sample text to be written in the file")
  .then(()=>{
    console.log("File written successfully");
  }
  )
  .catch((err) => {
    console.log("Something went wrong");
  });

  console.log("test");
