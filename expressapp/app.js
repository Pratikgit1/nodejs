const express = require("express");
const router = require("./routes");
//const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { logtime, logURL } = require("./middleware");
const app = express();
app.use(cors());
// bodyParser.urlencoded({extended:true}) // app.use(bodyParser.json())
app.use(express.urlencoded());
app.use(express.json());
//adding middleware
//app.use(logtime);
//app.use(logURL);
app.use(cookieParser());
///////////////////
app.use("/", router);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
