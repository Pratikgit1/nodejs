console.log("This is Demo File")
const express = require('express'); 
const route = require('./routes/users'); 
const bodyParser = require('body-parser'); 
const app = express(); app.use(bodyParser.json()); 
app.use(express.urlencoded()); 
app.use(express.json()); 
app.use('/', route); 
const port = process.env.PORT || 3000; app.listen(port, () => { console.log(`App running on port ${port}...`); });
