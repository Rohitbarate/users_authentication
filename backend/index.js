const express = require('express');
const cors = require('cors');
const connectToMongodb = require('./db');

// connection to db
connectToMongodb();

// middleware
const app = express();
const port = 5000

app.use(express.json());
app.use(cors());

//  api request link point

app.use('/api/auth', require('./modules/users'))

app.listen(port,()=>{
    console.log(`Example app listening on port http://localhost:${port}`);
})