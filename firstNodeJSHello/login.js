exports.login = (username, password) => {
  if (username === "admin" && password === "admin") {
    return true;
  } else {
    return false;
  }
};
exports.sayHello = (userName) => {
  console.log(`Hello ${userName} !! Welcome to the world of NodeJS`);
};
