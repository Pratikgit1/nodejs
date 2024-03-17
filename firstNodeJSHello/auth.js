
const login =require('./login')


let authenticationStatus = login.login("admin", "admin");
     if (authenticationStatus === true) {
       console.log("Authentication Success");
     } else {
       console.log("Authentication Failed");
     }
     login.sayHello("Lakshmi");
