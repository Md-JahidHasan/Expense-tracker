const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config({path:'./config.env'})
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());


// mongoDb Connection
const con = require('./db/connection.js')

// using routes
app.use(require('./routes/route'))


con.then(db=>{
    if(!db) return process.exit(1);

    // listen to the http server
    app.listen(port, () => {
        console.log(`Expens-Tracker server is running on port- ${port}`);
    })

    app.on('error', err=>console.log(`Failed to connect with http server: ${err}`))
}).catch(error=>{
    console.log(`Connection Failed ${error}`);
})




